import { createGlobalStyle } from "styled-components";

import LilitaOne from "../assets/fonts/lilitaone.woff";
import Lato from "../assets/fonts/lato.woff";
import Inter from "../assets/fonts/inter.woff";

export const colors = {
  red: "#f43127",
  yellow: "#f59a1b",
  beige: "#fae2cb",
  brown: "#3b200b",
  title_brown: "#635352",
  bg_color: "#FAF3F2",
  white: "#FFFFFF",
  onhover: "#B29B8480",
  brown_primary: "#1D0605E5",
  brown_secondary: "#1D0605B0",
};

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Lilita One';
  src: url(${LilitaOne}) format('woff');
}

@font-face {
  font-family: 'Lato';
  src: url(${Lato}) format('woff');
}

@font-face {
  font-family: 'Inter';
  src: url(${Inter}) format('woff');
}

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    background-color: ${colors.bg_color};
    /* 1rem = 10px */
  }

  body {
    font-family: "Lato", sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
