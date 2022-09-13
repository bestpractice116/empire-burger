import React from "react";
import { Container, Bottom, Nav, HorizontalLine } from "./Style";
import { colors } from "../../styles/Global";

import SocialIcons from "../Shared/SocialIcons/SocialIcons";
import GoogleMaps from "../Shared/GoogleMaps/GoogleMaps";
import Logo from "../Shared/Svg/Logo";

const Footer = () => {
  return (
    <Container>
      <h2>Onde fica o nosso castelo</h2>
      <h3>Estaremos de porta aberta para a vossa realeza</h3>
      <GoogleMaps />
      <Bottom>
        <Nav>
          <div>
            <Logo color={colors.red} />
            <h1>
              <span>Empire</span> Burger
            </h1>
          </div>
          <div>
            <ul>
              <li>Home</li>
              <li>Localização</li>
              <li>Cardápio</li>
              <li>Sobre</li>
            </ul>
            <SocialIcons color={colors.yellow} />
          </div>
        </Nav>
        <HorizontalLine />
        <h4>
          <span>2022 © EmpireBurger.</span> Todos os direitos reservados.
        </h4>
      </Bottom>
    </Container>
  );
};

export default Footer;
