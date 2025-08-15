import React from 'react';
import { ShoppingCart, Heart, User, Search } from "lucide-react";

const NavButton = () => {
    // Exemplo de quantidades (substitua por props ou contexto conforme necessário)
    const cartCount = 3;
    const favoriteCount = 1;

    return (
      <div className="flex gap-4 items-center">
        {/* Botão Busca */}
        <button
          className="hover:text-pink-950 bg-none border-none cursor-pointer"
          title="Buscar"
          type="button"
        >
          <Search size={24} />
        </button>
        {/* Botão Carrinho */}
        <button
          className="relative hover:text-pink-950 bg-none border-none cursor-pointer"
          title="Carrinho"
          type="button"
        >
          <ShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-900 text-white text-xs rounded-full px-1.5 py-0.5">
              {cartCount}
            </span>
          )}
        </button>
        {/* Botão Favoritos */}
        <button
          className="relative hover:text-pink-950 bg-none border-none cursor-pointer"
          title="Favorito"
          type="button"
        >
          <Heart size={24} />
          {favoriteCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-900 text-white text-xs rounded-full px-1.5 py-0.5">
              {favoriteCount}
            </span>
          )}
        </button>
        {/* Botão Login */}
        <button
          className="flex items-center gap-2 hover:text-pink-950 bg-none border-none cursor-pointer"
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