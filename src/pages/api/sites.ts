import netboxAPI from "integrations/netboxAPI"
import { NetboxResponse, Site } from "models/__generated__/netboxAPI"

export default async function handler(req, res) {
    const sitesResponse = await netboxAPI.get<NetboxResponse<Site>>('/dcim/sites')
    res.status(200).json(sitesResponse.data.results)
  }