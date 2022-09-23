import React from "react";
import { Container, MenuDiv, Hamburger } from "./Styles";

const Menu = () => {
  return (
    <Container>
      <input id="menu-hamburguer" type="checkbox" />

      <label htmlFor="menu-hamburguer">
        <MenuDiv>
          <Hamburger id="hamburguer"></Hamburger>
        </MenuDiv>
      </label>
    </Container>
  );
};

export default Menu;
