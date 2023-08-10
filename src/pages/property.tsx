import { LayoutMain } from "@/components/layout";
import PropertyItem from "@/modules/property/PropertyItem";
import React from "react";

const PropertyPage = () => {
  return (
    <LayoutMain>
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-bold text-[25px] text-primaryText">
          Property List
        </h1>
        <button className="flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-primary rounded-[10px] leading-normal">
          + Add Property
        </button>
      </div>
      <div className="p-5 bg-white rounded-2xl">
        <div aria-label="filter"></div>
        <div
          aria-label="list"
          className="grid grid-cols-2 gap-x-16 gap-y-6 mb-9"
        >
          {Array(10)
            .fill(0)
            .map((item, index) => (
              <PropertyItem key={index}>{index + 1}</PropertyItem>
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
    </LayoutMain>
  );
};

export default PropertyPage;
