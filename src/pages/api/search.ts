import netboxAPI from "integrations/netboxAPI";
import {
  IPAddress,
  NestedSite,
  NetboxResponse,
  Prefix,
} from "models/__generated__/netboxAPI";
import { NextApiHandler } from "next";
import _, { add } from "lodash";
import { SearchResult } from "models/SearchResult";

const handler: NextApiHandler<SearchResult[]> = async (req, res) => {
  if (!req.query.query) return res.status(400).end();
  const sitePrefixResponse = await netboxAPI.get<NetboxResponse<Prefix>>(
    `/ipam/prefixes`
  );

  const ipRequestPromises = sitePrefixResponse.data.results.map((prefix) =>
    getIPAddressesWithPrefix(prefix, req.query.query as string)
  );

  const ipResponses = await Promise.all(ipRequestPromises);
  const addresses = ipResponses.flat();
  // Extract sites with matches
  const siteMap: Record<number, SearchResult> = {};
  addresses.forEach((address) => {
    const nestedSite = address.prefix.site;
    siteMap[nestedSite.id] = {site: nestedSite, results: []};
  });

  // Group each address under its site ID
  const addressesBySiteId = _.groupBy(
    addresses,
    (address) => address.prefix.site.id
  );

  // Add addresses to site
  Object.keys(addressesBySiteId).forEach((id) => {
    siteMap[id].results = addressesBySiteId[id].map(address => ({...address, vlan: address.prefix.vlan?.display_name}))
  });

  res.status(200).json(Object.values(siteMap));
};
async function getIPAddressesWithPrefix(
  prefix: Prefix,
  query: string
): Promise<(IPAddress & { prefix: Prefix })[]> {
  const res = await netboxAPI.get<NetboxResponse<IPAddress>>(
    `/ipam/ip-addresses?parent=${prefix.prefix}&q=${query}`
  );

  return res.data.results.map((address) => ({
    ...address,
    prefix,
  }));
}
export default handler;
