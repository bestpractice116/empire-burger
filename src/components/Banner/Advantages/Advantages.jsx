import React from "react";
import {
  Container,
  Advantage,
  AdvantageIcon,
  AdvantageInfo,
  VerticalLine,
} from "./Styles";

import { FaHamburger } from "react-icons/fa";
import { MdHeadsetMic, MdDeliveryDining } from "react-icons/md";

const Advantages = () => {
  return (
    <Container>
      <Advantage>
        <AdvantageIcon>
          <FaHamburger size={"3rem"} />
        </AdvantageIcon>
        <AdvantageInfo>
          <h2>Artesanal</h2>
          <p>Nossas receitas são feitas com todo cuidado</p>
        </AdvantageInfo>
      </Advantage>
      <VerticalLine />
      <Advantage>
        <AdvantageIcon>
          <MdHeadsetMic size={"3rem"} />
        </AdvantageIcon>
        <AdvantageInfo>
          <h2>Atendimento</h2>
          <p>Totalmente personalizado</p>
        </AdvantageInfo>
      </Advantage>
      <VerticalLine />
      <Advantage>
        <AdvantageIcon>
          <MdDeliveryDining size={"3rem"} />
        </AdvantageIcon>
        <AdvantageInfo>
          <h2>Delivery Speed</h2>
          <p>Entregamos em menos de 45 minutos</p>
        </AdvantageInfo>
      </Advantage>
    </Container>
  );
};

export default Advantages;
