import React from "react";
import { Container } from "./Style";
import { BsInstagram } from "react-icons/bs";
import Ifood from "../Svg/Ifood";

const SocialIcons = ({ color }) => {
  return (
    <Container>
      <Ifood color={color} style={{ width: "3rem", marginRight: "1.8rem" }} />
      <BsInstagram size={"2.25rem"} color={color} />
    </Container>
  );
};

export default SocialIcons;
