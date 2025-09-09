import Container from "@/components/Container";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-4">
      <Container>
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Leões Imobiliária. Todos os
            direitos reservados.
          </p>

          <p className="text-xs mt-2">
            Desenvolvido por{" "}
            <strong>
              <a
                href=""
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                DTM Group
              </a>
            </strong>
          </p>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
