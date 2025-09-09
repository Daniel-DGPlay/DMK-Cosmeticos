import React, { FC } from "react";
import Logo from "./Logo";
import { X } from "lucide-react";
import Link from "next/link";
import { headerData } from "@/constants/data";
import { usePathname } from "next/navigation";
import SearchBar from "./SearchBar";
import CarrinhoBtn from "./CarrinhoBtn";
import FavoritoBtn from "./FavoritosBtn";
import Signin from "./Signin";
import SocialMedia from "./SocialMedia";
import { useOutsideClick } from "@/hooks";
interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(() => onClose());
  return (
    <view
      className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-blue-950/50 shadow-xl 
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
    >
      <div className="min-w-72 max-w-96 bg-blue-900 h-screen p-10 border-r flex flex-col gap-6">
        <div className="flex items-center justify-between gap-5">
          <Logo />

          <button
            className="cursor-pointer text-white hover:text-blue-950 transition-colors duration-300"
            onClick={onClose}
            title="Fechar Menu"
          >
            <X className="size-9" />
          </button>
        </div>

        <div className="flex flex-col space-y-3.5 font-semibold tracking-wide">
          {headerData?.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className={`flex items-center gap-2  hover:text-blue-950 transition-colors duration-300 
                ${
                  pathname === item?.href
                    ? "text-blue-950 font-bold"
                    : "text-white"
                }`}
            >
              {item?.title}
            </Link>
          ))}
        </div>

        <hr className="border-blue-800" />

        <div
          ref={sidebarRef}
          className="w-auto flex ls:w-1/3 fle x items-center gap-5"
        >
          <SearchBar />
          <CarrinhoBtn />
          <FavoritoBtn />
          <Signin />
        </div>

        <hr className="border-blue-800" />

        <SocialMedia />
      </div>
    </view>
  );
};

export default SideMenu;
