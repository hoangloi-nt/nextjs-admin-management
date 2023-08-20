import { LayoutMain } from "@/components/layout";
import PropertyList from "@/modules/property/PropertyList";
import Link from "next/link";
import React from "react";

const PropertyPage = () => {
  return (
    <LayoutMain>
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-bold text-[25px] text-primaryText">
          Property List
        </h1>
        <Link
          href="/property/create"
          className="flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-primary rounded-[10px] leading-normal"
        >
          + Add Property
        </Link>
      </div>
      <PropertyList></PropertyList>
    </LayoutMain>
  );
};

export default PropertyPage;
