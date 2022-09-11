import styled from "styled-components";
import { colors } from "../../../styles/Global";

export const Container = styled.section`
  margin: 0 auto;
  margin-bottom: 6.4rem;

  h2 {
    font-family: "Lilita One";
    font-size: 3.2rem;
    font-weight: 400;
    color: ${colors.brown};
    text-transform: uppercase;
  }

  p {
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: 1.6rem;
    color: ${colors.brown_secondary};
  }
`;
