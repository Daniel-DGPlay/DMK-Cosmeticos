import React from 'react';
import { ShoppingCart, Heart, User, Search } from "lucide-react";

const NavButton = () => {
    // Exemplo de quantidades (substitua por props ou contexto conforme necessário)
    // const cartCount = 3;
    // const favoriteCount = 1;

    return (
      <div className="flex gap-4 items-center">
        {/* Botão Login */}
        <button
          className="flex items-center gap-2 hover:text-pink-950 bg-none border-none cursor-pointer transition-all duration-300"
          title="Login"
          type="button"
        >
          <User size={24} />
          <span className="text-sm">Login</span>
        </button>
      </div>
    );
}

export default NavButton;