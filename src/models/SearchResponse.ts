import { IPResult } from "./IPResult";
import { Site, VLAN } from "./__generated__/netboxAPI";

export type SearchResponse = {
  ipAddresses: IPResult[];
  sites: Site[];
  vlans: VLAN[];
};
