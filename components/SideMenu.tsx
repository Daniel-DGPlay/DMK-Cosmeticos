import React, { FC } from 'react'
import Logo from './Logo';
import { X } from 'lucide-react';
import Link from "next/link";
import { headerData } from "@/constants/data";
import { usePathname } from 'next/navigation';
import SearchBar from './SearchBar';
import CarrinhoBtn from './CarrinhoBtn';
import FavoritoBtn from './FavoritosBtn';
import Signin from './Signin';
interface SideMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const SideMenu: FC<SideMenuProps> = ({ isOpen, onClose }) => {
    const pathname = usePathname();
    return (
      <view
        className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-pink-950/50 shadow-xl 
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="min-w-72 max-w-96 bg-pink-900 h-screen p-10 border-r flex flex-col gap-6">
          <div className="flex items-center justify-between gap-5">
            <Logo />
            <button
              className="cursor-pointer text-white hover:text-pink-950 transition-colors duration-300"
              onClick={onClose}
              title="Fechar Menu"
            >
              <X className="size-9" />
            </button>
          </div>
          <div className='flex flex-col space-y-3.5'>
            {headerData?.map((item) => (
              <Link
                key={item?.title}
                href={item?.href}
                className={`flex items-center gap-2 font-semibold tracking-wide hover:text-pink-950 transition-colors duration-300 
                ${pathname === item?.href ? "text-pink-950 font-bold" : "text-white"}`}
              >
                {item?.title}
              </Link>
            ))}
          </div>
          <hr className='border-pink-800' />
           <div className="w-auto flex ls:w-1/3 fle x items-center gap-5">
             <SearchBar />
             <CarrinhoBtn />
             <FavoritoBtn />
             <Signin />
           </div>
        </div>
      </view>
    );
};

export default SideMenu;
// fixed top-0 left-0 w-64 h-full bg-pink-950 shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50