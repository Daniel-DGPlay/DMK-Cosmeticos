import React from "react";
import Container from "@/components/Container";
import { ToggleTheme } from "@/components/toggle-theme";
// import { Button } from "@/components/ui/button";
import HomeBanner from "@/components/HomeBanner";

const page = () => {
  return (
    <main className="">
        <ToggleTheme />
      <Container className="font-nunito grid grid-rows-[20px_1fr_20px] items-center ju stify-items-center p-8 pb-20 gap-16 sm:p-20">

        <HomeBanner />
        {/* <h1 className="text-4xl font-bold">DMK Cosméticos</h1>
        <p className="text-lg text-gray-700">
          Bem-vindo à nossa loja de cosméticos!
        </p>
        <Button variant="default" size="lg">Teste</Button> */}
      </Container>
    </main>
  );
};

export default page;