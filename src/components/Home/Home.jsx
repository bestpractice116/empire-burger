import React from "react";
import { Container } from "./Style";

import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Offers from "../Offers/Offers";

const Home = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <Offers />
    </Container>
  );
};

export default Home;
