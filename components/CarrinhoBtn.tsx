import { ShoppingCart } from "lucide-react";
import React from "react";

export const CarrinhoBtn = () => {
  const cartCount = 2;
  return (
    <div>
      {/* Botão Carrinho */}
      <button
        className="relative hover:text-blue-950 bg-none border-none cursor-pointer transition-all duration-300"
        title="Carrinho"
        type="button"
      >
        <ShoppingCart size={24} />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-blue-950 text-white text-xs rounded-full px-1.5 pb-0.5">
            {cartCount}
          </span>
        )}
      </button>
    </div>
  );
};
export default CarrinhoBtn;
