import React from "react";
import banner from "../../assets/images/banner.png";
import Advantages from "./Advantages/Advantages";

import { Container, AdContainer, Button } from "./Styles";

const Banner = () => {
  return (
    <Container>
      <AdContainer>
        <h4>Uma nova experiência!</h4>
        <h2>
          King <span>Burger</span>
        </h2>
        <h4>
          Pra quem tem um <span>Apetite de um REI</span>
        </h4>
        <Button>Comprar Agora</Button>
      </AdContainer>
      <Advantages />
      <img src={banner} alt="" />
    </Container>
  );
};

export default Banner;
