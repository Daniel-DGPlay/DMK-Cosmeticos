import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import CarrinhoBtn from "./CarrinhoBtn";
import FavoritoBtn from "./FavoritosBtn";
import Signin from "./Signin";
import MobileMenu from "./MobileMenu";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded } from "@clerk/nextjs";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Header = async () => {
  const user = await currentUser();
  console.log(user, "user no header");
  return (
    <header>
      <Container className="bg-pink-700 text-white py-4 px-4 md:px-20 flex items-center justify-between">
        <view className="w-auto ls:w-1/3 flex items-center gap-2.5 md:gap-0 justify-start">
          <MobileMenu />
          <Logo />
        </view>

        <HeaderMenu />

        <view className="w-auto hidden sm:inline-flex ls:w-1/3 fle x items-center gap-5">
          <SearchBar />
          <CarrinhoBtn />
          <FavoritoBtn />

          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>

            {!user && <Signin />}
          </ClerkLoaded>
        </view>
      </Container>
    </header>
  );
};

export default Header;
