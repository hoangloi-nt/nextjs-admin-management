import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { sidebarLinks } from "@/constants/general.const";

const Sidebar = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <div className="px-4 py-6 bg-grayfc">
      {sidebarLinks.map((link) => (
        <Link
          key={link.title}
          href={link.path}
          className={`flex items-center px-6 py-4 text-base font-bold text-gray80 gap-c10 rounded-xl ${
            pathname === link.path
              ? "bg-primary text-grayfc"
              : "hover:text-primary"
          }`}
        >
          <span>{link.icon}</span>
          <span>{link.title}</span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
