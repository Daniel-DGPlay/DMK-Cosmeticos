"use client";
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderMenu = () => {
  const pathname = usePathname();
  return (
    <div className="hidden md:inline-flex items-center gap-7 capitalize font-semibold">
      <ul>
        {headerData?.map((item) => (
          <li key={item.href} className="inline-block mr-6">
            <Link href={item.href} className={`hover:text-pink-950 relative group  transition-colors duration-300 ${pathname === item?.href && "text-pink-950 font-bold hover:text-purple-50"}`}>
              {item.title}
              <span className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-pink-950 group-hover:w-1/2 group-hover:left-0 transition-all duration-300 ${pathname === item?.href && "w-1/2"}`}/>
              <span className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-pink-950 group-hover:w-1/2 group-hover:right-0 transition-all duration-300 ${pathname === item?.href && "w-1/2"}`}/>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderMenu;