"use client";
import { AlignLeft } from 'lucide-react'
import React from 'react'
import SideMenu from './SideMenu';

export const MobileMenu = () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    return (
      <div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden">
            <AlignLeft className="hover:text-pink-950 cursor-pointer transition-all duration-300 md:hidden md:gap-0" />
        </button>
        <div className="md:hidden">
            <SideMenu
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />
        </div>
      </div>
  );
}
export default MobileMenu;