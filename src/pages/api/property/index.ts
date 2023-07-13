import { NextApiRequest, NextApiResponse } from "next";
import properties from "@data/properties.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let filteredData = properties;
  const params = req.query;
  const { filter, state, status, type, offset, limit } = params;

  if (filter) {
    filteredData = filteredData.filter((item) => {
      return (
        item.title.toLowerCase().includes(filter as string) ||
        item.address.toLowerCase().includes(filter as string)
      );
    });
  }

  if (state) {
    filteredData = filteredData.filter((item) => {
      return item.state === state;
    });
  }

  if (status) {
    filteredData = filteredData.filter((item) => {
      return item.status === status;
    });
  }

  if (type) {
    filteredData = filteredData.filter((item) => {
      return item.type === type;
    });
  }

  if (offset && limit) {
    const start = parseInt(offset as string);
    const end = start + parseInt(limit as string);
    filteredData = filteredData.slice(start, end);
  }

  res.status(200).json({
    data: filteredData,
    total: filteredData.length,
  });
}
