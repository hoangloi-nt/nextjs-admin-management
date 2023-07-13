import { NextApiRequest, NextApiResponse } from "next";
import properties from "@data/properties.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let filteredData = properties;
  res.status(200).json(filteredData);
}
