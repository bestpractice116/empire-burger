import React, { useState } from "react";
import { Container, AdContainer, Button } from "./Styles";

import { sizes } from "../../utils/constants/sizes";
import banner from "../../assets/images/banner.png";
import banner_mobile from "../../assets/images/banner_mobile.png";
import Advantages from "./Advantages/Advantages";

const Banner = () => {
  const [isMobile, setIsMobile] = useState(null);

  window.addEventListener("resize", () => {
    const size = sizes.mobile_medium.replace("px", "");
    window.screen.width < Number(size) ? setIsMobile(true) : setIsMobile(false);
  });

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
      <img
        src={isMobile ? banner_mobile : banner}
        style={(isMobile && { height: "85rem" }) || { border: "none" }}
        alt="King Burger"
      />
    </Container>
  );
};

export default Banner;
