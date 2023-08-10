import { IconBed, IconCross, IconLocation } from "@/components/icons";
import Image from "next/image";
import React from "react";

interface IPropertyItemProps {
  children?: React.ReactNode;
}
const PropertyItem = ({ children }: IPropertyItemProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Image
          src="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="property item"
          width={201}
          height={125}
          className="object-cover rounded-xl"
        ></Image>
      </div>
      <div className="flex-1">
        <span className="inline-block px-[10px] py-2 text-xs font-semibold text-primary rounded-[5px] bg-[#DADEFA] mb-3">
          $7400
        </span>
        <h3 className="mb-[6px] text-base font-semibold text-primaryText">
          Metro Jayakarta Hotel & Spa
        </h3>
        <div className="flex items-center gap-1 mb-3 text-gray80">
          <IconLocation></IconLocation>
          <span>North Carolina, USA</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <IconBed></IconBed>
            <span className="text-xs font-medium">4 Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <IconCross></IconCross>
            <span className="text-xs font-medium">28M</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyItem;
