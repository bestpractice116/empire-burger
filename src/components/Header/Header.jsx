import React from "react";
import crown from "../../assets/images/crown.png";
import SocialIcons from "../Shared/SocialIcons/SocialIcons";

import {
  Container,
  Navigation,
  Logo,
  Nav,
  SocialMedia,
  VerticalLine,
} from "./Styles";

import { BsWhatsapp } from "react-icons/bs";

const Header = () => {
  return (
    <Container>
      <Navigation>
        <Logo>
          <img src={crown} alt="Empire Burger Logo" />
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
          <SocialIcons color="#FFF" />
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
