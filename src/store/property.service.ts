import { API_URL } from "@/config";
import { TFilter } from "@/types/general.types";
import { PropertyItemData } from "@/types/property.types";
import axios from "axios";

export async function getProperties(params?: TFilter): Promise<
  | {
      properties: PropertyItemData[] | null | undefined;
      total: number;
      offset: number;
      limit: number;
    }
  | undefined
> {
  try {
    const res = await axios.get(`${API_URL}/property`, {
      params,
    });
    if (res.status === 200) {
      return {
        properties: res.data.properties,
        total: res.data.total,
        offset: params?.offset || 0,
        limit: params?.limit || 0,
      };
    }
    return {
      properties: [],
      total: 0,
      offset: 0,
      limit: 0,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function addNewProperty() {
  try {
    const res = await axios.post(`${API_URL}/property/create`, {
      id: 2,
      title: "Create a new property",
    });
    return [];
  } catch (error) {
    console.log(error);
  }
}

export async function getProperty(
  id: number
): Promise<PropertyItemData | null | undefined> {
  try {
    const res = await axios.get(`${API_URL}/property/${id}`);
    if (res.status === 200) {
      return res.data;
    }
    return null;
  } catch (error) {
    console.log(error);
  }
}
