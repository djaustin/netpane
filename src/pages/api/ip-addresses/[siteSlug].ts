import netboxAPI from "integrations/netboxAPI";
import { IPTableItem } from "models/IPTableData";
import {
  IPAddress,
  NetboxResponse,
  Prefix,
} from "models/__generated__/netboxAPI";
import { NextApiHandler } from "next";

const handler: NextApiHandler<IPTableItem[]> = async (req, res) => {
  const siteSlug = req.query.siteSlug as string;
  const vlanId = req.query.vlanId as string;

  const sitePrefixResponse = await netboxAPI.get<NetboxResponse<Prefix>>(
    `/ipam/prefixes?site=${siteSlug}${vlanId ? "&vlan_vid=" + vlanId : ""}`
  );

  const ipRequestPromises = sitePrefixResponse.data.results.map(
    getIPAddressesWithVLAN
  );

  const ipResponses = await Promise.all(ipRequestPromises);
  const addresses = ipResponses.flat();

  res.status(200).json(addresses);
};

async function getIPAddressesWithVLAN(prefix: Prefix): Promise<IPTableItem[]> {
  const res = await netboxAPI.get<NetboxResponse<IPAddress>>(
    `/ipam/ip-addresses?parent=${prefix.prefix}&limit=1000`
  );

  return res.data.results.map((address) => ({
    ...address,
    vlan: prefix.vlan?.display || null,
  }));
}

export default handler;
