import React from "react";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="font-bold ">
      <ul>
        <li className="inline-block mr-4">
          <Link href="/" className="text-white hover:text-pink-950">
            Home
          </Link>
        </li>
        <li className="inline-block mr-4">
          <Link href="/products" className="text-white hover:text-pink-950">
            Produtos
          </Link>
        </li>
        <li className="inline-block mr-4">
          <Link href="/about" className="text-white hover:text-pink-950">
            Sobre Nós
          </Link>
        </li>
        <li className="inline-block mr-4">
          <Link href="/contact" className="text-white hover:text-pink-950">
            Contato
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Menu;