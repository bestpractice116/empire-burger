import styled from "styled-components";
import { colors } from "../../styles/Global";

export const Container = styled.section`
  width: 110rem;
  margin: auto;

  h2 {
    font-family: "Lilita One";
    font-size: 3.2rem;
    font-weight: 400;
    color: ${colors.brown};
  }

  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${colors.brown_secondary};
  }
`;
