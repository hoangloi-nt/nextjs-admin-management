import React, { Fragment } from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

interface ILayoutMainProps {
  children: React.ReactNode;
}
const LayoutMain = ({ children }: ILayoutMainProps) => {
  return (
    <Fragment>
      <Topbar></Topbar>
      <div className="grid grid-cols-[250px_minmax(0,1fr)] min-h-screen">
        <Sidebar></Sidebar>
        <div className="px-6 py-7">{children}</div>
      </div>
    </Fragment>
  );
};

export default LayoutMain;
