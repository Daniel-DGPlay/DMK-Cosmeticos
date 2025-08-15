import React from 'react';
import Container from './Container';
import Logo from './Logo';
import Menu from './Menu';
import ToggleMenuButtons from './toggle-menu';

const Header = () => { 
    return (
      <header>
        <Container className="bg-pink-700 text-white py-4 ps-20  flex items-center justify-between">
          <Logo />
          <Menu />
          <ToggleMenuButtons />
          {/* <h1 className="text-2xl font-bold">DMK Cosméticos</h1>
                <p className="text-sm">Sua loja de cosméticos online</p> */}
        </Container>
      </header>
    );
}

export default Header;