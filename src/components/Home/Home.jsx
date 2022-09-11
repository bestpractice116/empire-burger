import React from "react";
import { Container } from "./Style";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Main from "../Main/Main";

const Home = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <Main />
    </Container>
  );
};

export default Home;
