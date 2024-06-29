import React from "react";
import SideNav from "./_components/SideNav";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="hidden md:flex h-full w-64 flex-col fixed inset-y-0 z-50">
        <SideNav />
      </div>
      <div className="flex-1 md:ml-64">
        {children}
      </div>
    </div>
  );
};

export default Layout;