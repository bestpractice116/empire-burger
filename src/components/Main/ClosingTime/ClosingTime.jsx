import React, { useState } from "react";
import { Container, Badge, VerticalLine, Hashtag } from "./Style";
import clockicon from "../../../assets/images/clockicon.png";
import { colors } from "../../../styles/Global";

const ClosingTime = () => {
  const [isClosed, setIsClosed] = useState(true);
  const milliseconds = 2000;

  setInterval(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 17 && currentHour < 23) {
      setIsClosed(false);
    } else {
      setIsClosed(true);
    }
  }, milliseconds);

  return (
    <Container>
      <Badge color={isClosed ? colors.red : "#119911"}>
        <img src={clockicon} alt="icone" />
        <VerticalLine />
        <div>
          <h3>Horário de funcionamento</h3>
          <h4>Segunda-feira à sexta-feira: 17h00 - 23h00</h4>
          <h4>Sabado a domingo: 18h00 - 23h00</h4>
        </div>
      </Badge>
      <Hashtag>
        <h4>Não esqueça de marcar a gente no Instagram:</h4>
        <h3>#empireburger</h3>
      </Hashtag>
    </Container>
  );
};

export default ClosingTime;
