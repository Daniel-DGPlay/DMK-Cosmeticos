import React, { FC } from 'react'
import Logo from './Logo';
import { X } from 'lucide-react';
interface SideMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const SideMenu: FC<SideMenuProps> = ({ isOpen, onClose }) => {
    return (
      <div
        className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-pink-950/50 shadow-xl 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}
      >
        <div className="min-w-72 max-w-96 bg-pink-900 h-screen p-10 border-r flex flex-col gap-6 justify-between">
          <div className="flex items-center justify-between gap-5">
            <Logo />
            <button
              className=" cursor-pointer text-white hover:text-pink-950 transition-colors duration-300"
              onClick={onClose}
              title="Fechar Menu"
            >
              <X className='size-9' />
            </button>
          </div>
          <div></div>
        </div>
      </div>
    );
};

export default SideMenu;
// fixed top-0 left-0 w-64 h-full bg-pink-950 shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50