import axios from "axios";
import config from "config";

const netboxAPI = axios.create({
  baseURL: config.apiBaseURL,
  headers: {
    Authorization: `Token ${config.apiToken}`,
  },
});

export default netboxAPI;
