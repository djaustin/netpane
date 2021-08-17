import netboxAPI from "integrations/netboxAPI";
import _ from "lodash";
import { IPResult } from "models/IPResult";
import {
  IPAddress,
  NetboxResponse,
  Prefix,
  Site,
  VLAN,
} from "models/__generated__/netboxAPI";
import { NextApiHandler } from "next";

const handler: NextApiHandler<any> = async (req, res) => {
  if (!req.query.query || !req.query.scope) return res.status(400).end();
  const queryString = req.query.query as string;
  const scopes = (req.query.scope as string).split(",");
  const emptyPromise = Promise.resolve([]);

  const ipAddressPromise = scopes.includes("ip-address")
    ? fetchIPAddresses(queryString)
    : emptyPromise;
  const sitePromise = scopes.includes("site")
    ? fetchSites(queryString)
    : emptyPromise;
  const vlanPromise = scopes.includes("vlan")
    ? fetchVLANs(queryString)
    : emptyPromise;

  const [ipAddresses, sites, vlans] = await Promise.all([
    ipAddressPromise,
    sitePromise,
    vlanPromise,
  ]);

  res.status(200).json({ sites, vlans, ipAddresses });
};

async function fetchIPAddresses(query: string) {
  const sitePrefixResponse = await netboxAPI.get<NetboxResponse<Prefix>>(
    `/ipam/prefixes?limit=9999`
  );

  // Filter out prefixes not linked to a site
  const prefixes = sitePrefixResponse.data.results.filter(
    (prefix) => prefix.site
  );
  const ipRequestPromises = prefixes.map((prefix) =>
    getIPAddressesWithPrefix(prefix, query)
  );

  const ipResponses = await Promise.all(ipRequestPromises);
  const addresses = ipResponses.flat();

  // Extract sites with matches
  const siteMap: Record<number, IPResult> = {};
  addresses.forEach((address) => {
    const nestedSite = address.prefix.site;
    if (nestedSite) siteMap[nestedSite.id] = { site: nestedSite, results: [] };
  });

  // Group each address under its site ID
  const addressesBySiteId = _.groupBy(
    addresses,
    (address) => address.prefix.site.id
  );

  // Add addresses to site
  Object.keys(addressesBySiteId).forEach((id) => {
    siteMap[id].results = addressesBySiteId[id].map((address) => ({
      ...address,
      vlan: address.prefix.vlan?.display_name,
    }));
  });

  return Object.values(siteMap);
}

async function getIPAddressesWithPrefix(
  prefix: Prefix,
  query: string
): Promise<(IPAddress & { prefix: Prefix })[]> {
  const res = await netboxAPI.get<NetboxResponse<IPAddress>>(
    `/ipam/ip-addresses?parent=${prefix.prefix}&q=${query}&limit=9999`
  );

  return res.data.results.map((address) => ({
    ...address,
    prefix,
  }));
}

async function fetchSites(query: string) {
  const response = await netboxAPI.get<NetboxResponse<Site>>(
    `/dcim/sites?q=${query}&limit=9999`
  );
  return response.data.results;
}

async function fetchVLANs(query: string) {
  const response = await netboxAPI.get<NetboxResponse<VLAN>>(
    `/ipam/vlans?q=${query}&limit=9999`
  );
  return response.data.results;
}

export default handler;
