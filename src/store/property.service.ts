import { API_URL } from "@/config";
import { TFilter } from "@/types/general.types";
import { PropertyItemData } from "@/types/property.types";
import axios from "axios";

export async function getProperties(
  params?: TFilter
): Promise<PropertyItemData[] | null | undefined> {
  try {
    const res = await axios.get(`${API_URL}/property`, {
      params,
    });
    if (res.status === 200) {
      return res.data.properties;
    }
    return [];
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
