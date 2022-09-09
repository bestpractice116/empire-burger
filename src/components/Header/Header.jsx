import React from "react";
import crown from "../../assets/images/crown.png";
import ifood_logo from "../../assets/svg/ifood_logo.svg";

import {
  Container,
  Navigation,
  Logo,
  Nav,
  SocialMedia,
  VerticalLine,
} from "./Styles";

import { BsInstagram, BsWhatsapp } from "react-icons/bs";

const Header = () => {
  return (
    <Container>
      <Navigation>
        <Logo>
          <img src={crown} alt="logo" />
          <h1>
            <span>Empire </span>burger
          </h1>
        </Logo>

        <Nav>
          <li>Home</li>
          <li>Promoção</li>
          <li>Cardápio</li>
          <li>Comentários</li>
          <li>Contato</li>
        </Nav>

        <SocialMedia>
          <img src={ifood_logo} alt="Ifood" />
          <BsInstagram
            size={"2.25rem"}
            style={{
              color: "#FFF",
            }}
          />
          <VerticalLine />
          <button>
            <BsWhatsapp
              size={"2.25rem"}
              style={{
                marginRight: ".9rem",
                padding: 0,
              }}
            />
            <span>Contato</span>
          </button>
        </SocialMedia>
      </Navigation>
    </Container>
  );
};

export default Header;
