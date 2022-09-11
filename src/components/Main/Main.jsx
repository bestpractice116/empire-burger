import React from "react";
import { Container } from "./Style";
import ClosingTime from "./ClosingTime/ClosingTime";
import Offers from "./Offers/Offers";

const Main = () => {
  return (
    <Container>
      <Offers />
      <ClosingTime />
    </Container>
  );
};

export default Main;
