import {
  IconBuilding,
  IconDashboard,
  IconMessage,
  IconPerson,
  IconProfile,
  IconStar,
} from "@/components/icons";
import { TDropdownData, TSidebarLinks } from "@/types/general.types";

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

export const statusData: TDropdownData[] = [
  {
    value: "",
    label: "Any status",
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
