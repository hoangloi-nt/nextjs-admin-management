export interface PropertyItemData {
  id?: number;
  title?: string;
  address?: string;
  facility?: PropertyFacility;
  status?: string;
  type?: string;
  price?: number;
  image?: string[];
  country?: string;
  description?: string;
  rating?: number;
  state?: string;
  agent?: PropertyAgent;
}

export interface PropertyFacility {
  beds?: number;
  baths?: number;
  area?: string;
  "smooking-area"?: boolean;
  kitchen?: boolean;
  balcony?: boolean;
  wifi?: boolean;
  "parking-area"?: boolean;
}

export interface PropertyAgent {
  name?: string;
  phone?: string;
  address?: string;
  properties?: number;
}
