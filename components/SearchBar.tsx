import { Search } from "lucide-react";
import React from "react";

export const SearchBar = () => {
  return (
    <div>
      {/* Botão Busca */}
      <button
        className="hover:text-blue-950 bg-none border-none cursor-pointer transition-all duration-300"
        title="Buscar"
        type="button"
      >
        <Search size={24} />
      </button>
    </div>
  );
};
export default SearchBar;
