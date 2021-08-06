import { IPTableItem } from "./IPTableData";
import { NestedSite } from "./__generated__/netboxAPI";

export type IPResult = {
  site: NestedSite;
  results: IPTableItem[];
};
