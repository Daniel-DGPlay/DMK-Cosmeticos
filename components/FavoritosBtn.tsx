import { Heart } from 'lucide-react';
import React from 'react'

export const FavoritoBtn = () => {
    const favoriteCount = 1;
  return (
    <div>
      {/* Botão Favoritos */}
      <button
        className="relative hover:text-pink-950 bg-none border-none cursor-pointer transition-all duration-300"
        title="Favorito"
        type="button"
      >
        <Heart size={24} />
        {favoriteCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-pink-900 text-white text-xs rounded-full px-1.5 pb-0.5">
            {favoriteCount}
          </span>
        )}
      </button>
    </div>
  );
}
export default FavoritoBtn