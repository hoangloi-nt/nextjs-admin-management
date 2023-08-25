import {
  IconBuilding,
  IconDashboard,
  IconMessage,
  IconPerson,
  IconProfile,
  IconStar,
} from "@/components/icons";
import {
  TPropertyStatusData,
  TPropertyTypeData,
  TSidebarLinks,
} from "@/types/general.types";

export const sidebarLinks: TSidebarLinks[] = [
  {
    title: "Dashboard",
    icon: <IconDashboard />,
    path: "/",
  },
  {
    title: "Property",
    icon: <IconBuilding />,
    path: "/property",
  },
  {
    title: "Agent",
    icon: <IconPerson />,
    path: "/agent",
  },
  {
    title: "Review",
    icon: <IconStar />,
    path: "/review",
  },
  {
    title: "Message",
    icon: <IconMessage />,
    path: "/message",
  },
  {
    title: "My profile",
    icon: <IconProfile />,
    path: "/my-profile",
  },
];

export const propertyStatusData: TPropertyStatusData[] = [
  {
    value: "",
    label: "Any Status",
  },
  {
    value: "sale",
    label: "For Sale",
  },
  {
    value: "rent",
    label: "For Rent",
  },
];

export const propertyTypeData: TPropertyTypeData[] = [
  {
    value: "",
    label: "Any Type",
  },
  {
    value: "apartments",
    label: "Apartments",
  },
  {
    value: "commercial",
    label: "Commercial",
  },
  {
    value: "garages",
    label: "Garages",
  },
  {
    value: "houses",
    label: "Houses",
  },
  {
    value: "lots",
    label: "Lots",
  },
];

export const ITEMS_PER_PAGE = 4;
