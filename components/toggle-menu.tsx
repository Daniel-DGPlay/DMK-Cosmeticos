import React from 'react';
import { ShoppingCart, Heart, User } from "lucide-react";

const ToggleMenuButtons = () => {
    return (
        <div className="flex gap-4">
            <button
                className="hover:text-pink-950 bg-none border-none cursor-pointer"
                title="Carrinho"
                type="button"
            >
                <ShoppingCart size={24} />
            </button>
            <button
                className="hover:text-pink-950 bg-none border-none cursor-pointer"
                title="Favorito"
                type="button"
            >
                <Heart size={24} />
            </button>
            <button
                className="hover:text-pink-950 bg-none border-none cursor-pointer"
                title="Login"
                type="button"
            >
                <User size={24} />
            </button>
        </div>
    );
}

export default ToggleMenuButtons;