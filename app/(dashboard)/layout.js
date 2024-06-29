"use client"
import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import TopHeader from "./_components/TopHeader";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar for medium and larger screens */}
      <div className="hidden md:flex h-full w-64 flex-col fixed inset-y-0 z-50">
        <SideNav />
      </div>

      {/* Sidebar for small screens */}
      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white">
          <div className="h-full w-64">
            <SideNav />
          </div>
        </div>
      )}

      <div className="flex-1 md:ml-64">
        <TopHeader toggleSidebar={toggleSidebar} />
        {children}
      </div>
    </div>
  );
};

export default Layout;