import React from "react";
import Container from "@/components/Container";
import { ToggleTheme } from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <main className="">
      <Container className="font-nunito grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
        <h1 className="text-4xl font-bold">DMK Cosméticos</h1>
        <p className="text-lg text-gray-700">
          Bem-vindo à nossa loja de cosméticos!
        </p>
        <Button variant="default" size="lg">Teste</Button>
        <ToggleTheme />
      </Container>
    </main>
  );
};

export default page;

// import React from "react";

// const Home = () => {
//   return (
//     <main>
      
//       Home
//     </main>
//   );
// };
// export default Home;