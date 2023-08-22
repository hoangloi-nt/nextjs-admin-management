import { getProperties } from "@/store/property.service";
import { PropertyItemData } from "@/types/property.types";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import PropertyItem, { PropertyItemLoading } from "./PropertyItem";
import { Dropdown } from "@/components/dropdown";
import {
  propertyStatusData,
  propertyTypeData,
} from "@/constants/general.const";
import {
  TFilter,
  TPropertyStatusData,
  TPropertyTypeData,
} from "@/types/general.types";
import { debounce } from "lodash";

const PropertyList = () => {
  const [selected, setSelected] = useState({
    statusText: "Any Status",
    typeText: "Any Type",
    countryText: "Any Countries",
    stateText: "Any States",
  });
  const [filter, setFilter] = useState<TFilter>({
    text: "",
    status: "",
    country: "",
    type: "",
    state: "",
  });

  const { data, isLoading, error } = useQuery({
    queryKey: ["properties", filter.text, filter.status, filter.type],
    queryFn: () =>
      getProperties({
        text: filter.text,
        status: filter.status,
        type: filter.type,
      }),
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });

  const properties = data;
  const handleFilterProperty = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilter({ ...filter, text: e.target.value });
    },
    500
  );

  const handleFilterByStatus = (value: TPropertyStatusData["value"]) => {
    setFilter({ ...filter, status: value });
    const foundStatus = propertyStatusData.find((item) => item.value === value);
    setSelected({
      ...selected,
      statusText: value ? foundStatus?.label || "" : "Any Status",
    });
  };

  const handleFilterByType = (value: TPropertyTypeData["value"]) => {
    setFilter({ ...filter, type: value });
  };

  if (error) return null;

  return (
    <div className="p-5 bg-white rounded-2xl">
      <div aria-label="filter" className="flex gap-5 mb-6">
        <div className="rounded-lg p-2.5 gap-2.5 bg-grayf7 flex items-center basis-[232px]">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4697 15.5303C14.7626 15.8232 15.2374 15.8232 15.5303 15.5303C15.8232 15.2374 15.8232 14.7626 15.5303 14.4697L14.4697 15.5303ZM12.75 7.875C12.75 10.5674 10.5674 12.75 7.875 12.75V14.25C11.3958 14.25 14.25 11.3958 14.25 7.875H12.75ZM7.875 12.75C5.18261 12.75 3 10.5674 3 7.875H1.5C1.5 11.3958 4.35418 14.25 7.875 14.25V12.75ZM3 7.875C3 5.18261 5.18261 3 7.875 3V1.5C4.35418 1.5 1.5 4.35418 1.5 7.875H3ZM7.875 3C10.5674 3 12.75 5.18261 12.75 7.875H14.25C14.25 4.35418 11.3958 1.5 7.875 1.5V3ZM15.5303 14.4697L12.3896 11.329L11.329 12.3896L14.4697 15.5303L15.5303 14.4697Z"
              fill="#808191"
            />
          </svg>
          <input
            type="text"
            placeholder="Enter an address, city or Zip code"
            className="w-full text-xs font-medium bg-transparent outline-none"
            onChange={handleFilterProperty}
          />
        </div>
        <Dropdown
          selected={selected.statusText}
          data={propertyStatusData}
          onClick={handleFilterByStatus}
        ></Dropdown>
        <Dropdown
          selected={selected.typeText}
          data={propertyTypeData}
          onClick={handleFilterByType}
        ></Dropdown>
        <Dropdown selected={selected.countryText}></Dropdown>
        <Dropdown selected={selected.stateText}></Dropdown>
        <button className="flex items-center gap-2.5 rounded-lg bg-grayf7 p-2 text-xs font-medium text-gray80">
          <span>
            <svg
              width={18}
              height={18}
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.59451 13.5H3C2.58579 13.5 2.25 13.1642 2.25 12.75C2.25 12.3358 2.58579 12 3 12H4.59451C4.92755 10.7061 6.10212 9.75 7.5 9.75C8.89788 9.75 10.0725 10.7061 10.4055 12H15C15.4142 12 15.75 12.3358 15.75 12.75C15.75 13.1642 15.4142 13.5 15 13.5H10.4055C10.0725 14.7939 8.89788 15.75 7.5 15.75C6.10212 15.75 4.92755 14.7939 4.59451 13.5ZM6 12.75C6 11.9216 6.67157 11.25 7.5 11.25C8.32843 11.25 9 11.9216 9 12.75C9 13.5784 8.32843 14.25 7.5 14.25C6.67157 14.25 6 13.5784 6 12.75Z"
                fill="#808191"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.59451 6H3C2.58579 6 2.25 5.66421 2.25 5.25C2.25 4.83579 2.58579 4.5 3 4.5H7.59451C7.92755 3.20608 9.10212 2.25 10.5 2.25C11.8979 2.25 13.0725 3.20608 13.4055 4.5H15C15.4142 4.5 15.75 4.83579 15.75 5.25C15.75 5.66421 15.4142 6 15 6H13.4055C13.0725 7.29392 11.8979 8.25 10.5 8.25C9.10212 8.25 7.92755 7.29392 7.59451 6ZM9 5.25C9 4.42157 9.67157 3.75 10.5 3.75C11.3284 3.75 12 4.42157 12 5.25C12 6.07843 11.3284 6.75 10.5 6.75C9.67157 6.75 9 6.07843 9 5.25Z"
                fill="#808191"
              />
            </svg>
          </span>
          <span>More</span>
        </button>
      </div>
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
