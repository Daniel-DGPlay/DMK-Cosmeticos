import { headerData } from "@/constants/data";
import React from "react";
import Link from "next/link";

// const HeaderMenu = () => {
//   return (
//     <div className="font-bold ">
//       <ul>
//         <li className="inline-block mr-4">
//           <Link href="/" className="text-white hover:text-pink-950">
//             Home
//           </Link>
//         </li>
//         <li className="inline-block mr-4">
//           <Link href="/products" className="text-white hover:text-pink-950">
//             Produtos
//           </Link>
//         </li>
//         <li className="inline-block mr-4">
//           <Link href="/about" className="text-white hover:text-pink-950">
//             Sobre Nós
//           </Link>
//         </li>
//         <li className="inline-block mr-4">
//           <Link href="/contact" className="text-white hover:text-pink-950">
//             Contato
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

const HeaderMenu = () => {
  return (
    <div className="hidden md:inline-flex items-center gap-7 capitalize font-semibold">
      <ul>
        {headerData?.map((item) => (
          <li key={item.href} className="inline-block mr-6">
            <Link href={item.href} className="text-white hover:text-pink-950 hoverEffect relative group">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderMenu;

// time video: https://youtu.be/iygpxgLpug8?list=PLOl4xN4eJVEOWn4gGVyeesXr_TYf2XOAA&t=1355