import React from 'react';
import Container from './Container';
import Logo from './Logo';
import HeaderMenu from "./HeaderMenu";
import NavButton from './NavButton';
import { SearchBar } from './SearchBar';
import FavoritoBtn from './FavoritosBtn';
import CarrinhoBtn from './CarrinhoBtn';

const Header = () => { 
    return (
      <header>
        <Container className="bg-pink-700 text-white py-4 px-6 md:px-20 flex items-center justify-between">
          <Logo />
          <HeaderMenu />
          <div className="w-auto ls:w-1/3 flex items-center justify-end gap-5">
            <SearchBar />
            <CarrinhoBtn />
            <FavoritoBtn />
          </div>
          {/* <NavButton /> */}
        </Container>
      </header>
    );
}

export default Header;

// time video: https://youtu.be/iygpxgLpug8?list=PLOl4xN4eJVEOWn4gGVyeesXr_TYf2XOAA&t=1892