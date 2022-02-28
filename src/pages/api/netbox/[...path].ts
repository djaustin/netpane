import { NextApiRequest, NextApiResponse } from "next";
import config from "../../../config";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let location = config.baseURL;
  const path = req.query.path;
  delete req.query.path;
  console.log(req.query);
  if (!Array.isArray(path)) {
    location = `${location}/${path}`;
  } else {
    location = `${location}/${path.join("/")}`;
  }
  location = location + "?" + new URLSearchParams(req.query as any).toString();
  console.log(location);
  return res.status(302).setHeader("Location", location).send(null);
}
