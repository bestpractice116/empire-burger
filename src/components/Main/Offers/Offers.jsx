import React from "react";
import { Container } from "./Style";
import BurgersOnOffer from "./BurgersOnOffer/BurgersOnOffer";

const Offers = () => {
  return (
    <Container>
      <h2>Ofertas especiais</h2>
      <p>
        Aproveite todas as nossas ofertas, fiquem de olhos abertos, porque
        sempre estamos mudando o nosso cardapio.
      </p>
      <BurgersOnOffer />
    </Container>
  );
};

export default Offers;
