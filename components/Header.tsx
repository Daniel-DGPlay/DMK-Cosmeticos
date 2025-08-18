import React from 'react';
import Container from './Container';
import Logo from './Logo';
import HeaderMenu from "./HeaderMenu";
import SearchBar from './SearchBar';
import CarrinhoBtn from './CarrinhoBtn';
import FavoritoBtn from './FavoritosBtn';
import Signin from './Signin';
import MobileMenu from './MobileMenu';

const Header = () => { 
    return (
      <header>
        <Container className="bg-pink-700 text-white py-4 px-4 md:px-20 flex items-center justify-between">
          <div className="w-auto ls:w-1/3 flex items-center gap-2.5 md:gap-0 justify-start">
            <MobileMenu />
            <Logo />
          </div>
          <HeaderMenu />
            <div className="w-auto ls:w-1/3 flex items-center gap-5">
              <SearchBar />
              <CarrinhoBtn />
              <FavoritoBtn />
              <Signin />
            </div>
        </Container>
      </header>
    );
}

export default Header;

// time video: https://youtu.be/iygpxgLpug8?list=PLOl4xN4eJVEOWn4gGVyeesXr_TYf2XOAA&t=1892