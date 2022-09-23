import React from "react";
import { Container } from "./Style";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Menu from "../Shared/Menu/Menu";

const Home = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <Main />
      <Menu />
      <Footer />
    </Container>
  );
};

export default Home;
