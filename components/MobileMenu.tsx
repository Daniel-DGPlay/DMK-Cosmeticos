"use client";
import { AlignLeft } from "lucide-react";
import React from "react";
import SideMenu from "./SideMenu";

export const MobileMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  return (
    <view>
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden"
        title="Abrir Menu"
      >
        <AlignLeft className="hover:text-blue-950 cursor-pointer transition-all duration-300 md:hidden md:gap-0 size-9" />
      </button>
      <div className="md:hidden">
        <SideMenu
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
    </view>
  );
};
export default MobileMenu;
