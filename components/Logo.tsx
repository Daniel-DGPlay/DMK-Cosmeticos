import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href="/"
      className="text-white hover:text-blue-950 transition-all duration-300"
      title="DMK Cosméticos"
      aria-label="DMK Cosméticos"
    >
      {/* <h2>Logo</h2> */}
      <h1 className="font-bold text-2xl leading-5">Leões Imobiliária</h1>
      <p className="text-sm font-sans">Sistemas Administrativo</p>
    </Link>
  );
};
export default Logo;
