import React from "react";
import { Container, OfferInfo } from "./Style";

import offer1 from "../../../assets/images/offer1.png";
import offer2 from "../../../assets/images/offer2.png";
import offer3 from "../../../assets/images/offer3.png";

const BurgersOnOffer = () => {
  return (
    <Container>
      <article>
        <OfferInfo color="#FFF">
          <h3>Burger imperial + batata</h3>
          <h4>250kg</h4>
        </OfferInfo>
        <span>
          <h4>Apenas</h4>
          <h3>Hoje</h3>
        </span>
        <img src={offer1} alt="offer" />
      </article>
      <article>
        <OfferInfo color="#000">
          <h3>Batata</h3>
          <h4>150kg</h4>
        </OfferInfo>
        <img src={offer2} alt="offer" />
      </article>
      <article>
        <OfferInfo color="#000">
          <h3>Sorvete</h3>
          <h4>50kg</h4>
        </OfferInfo>
        <img src={offer3} alt="offer" />
      </article>
    </Container>
  );
};

export default BurgersOnOffer;
