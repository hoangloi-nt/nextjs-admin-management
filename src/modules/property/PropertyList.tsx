import { getProperties } from "@/store/property.service";
import { PropertyItemData } from "@/types/property.types";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import PropertyItem, { PropertyItemLoading } from "./PropertyItem";

type Filter = {
  address: string;
  status: string;
  country: string;
  type: string;
  state: string;
};
const PropertyList = () => {
  const [filter, setFilter] = useState<Filter>({
    address: "",
    status: "",
    country: "",
    type: "",
    state: "",
  });

  const { data, isLoading, error } = useQuery({
    queryKey: ["properties"],
    queryFn: () => getProperties(),
    staleTime: 1 * 60 * 1000,
  });

  const properties = data;

  if (error || properties?.length === 0) return null;

  return (
    <div className="p-5 bg-white rounded-2xl">
      <div aria-label="filter"></div>
      <div aria-label="list" className="grid grid-cols-2 gap-x-16 gap-y-6 mb-9">
        {isLoading &&
          Array(2)
            .fill(0)
            .map((item, index) => (
              <PropertyItemLoading key={index}></PropertyItemLoading>
            ))}
        {!isLoading &&
          properties?.map((item: PropertyItemData) => (
            <PropertyItem item={item} key={item.id}></PropertyItem>
          ))}
      </div>
      <div
        aria-label="pagination"
        className="flex items-center justify-between"
      >
        <p className="text-gray80">Showing 1 to 10 Properties</p>
        <div className="flex items-center gap-c10 ">
          <button className="flex items-center justify-center text-white rounded-lg w-9 h-9 bg-primary">
            1
          </button>
          <button className="flex items-center justify-center rounded-lg w-9 h-9 text-gray80">
            2
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
