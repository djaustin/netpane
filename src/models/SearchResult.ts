import { IPTableItem } from "./IPTableData";
import { NestedSite } from "./__generated__/netboxAPI";

export type SearchResult = {
  site: NestedSite;
  results: IPTableItem[];
};
