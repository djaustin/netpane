import { makeUseAxios } from "axios-hooks";
import netboxAPI from "integrations/netboxAPI";

export default makeUseAxios({axios: netboxAPI})