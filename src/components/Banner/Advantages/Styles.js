import styled from "styled-components";
import { colors } from "../../../styles/Global";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  position: absolute;
  height: 10.1rem;
  width: 900px;
  bottom: -60px;

  background-color: ${colors.white};
  box-shadow: 0 4px 40px ${colors.onhover};
  border-radius: 1rem;
`;

export const Advantage = styled.div`
  display: flex;
`;

export const AdvantageIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 6rem;

  border-radius: 50%;
  background-color: ${colors.beige};
  margin-right: 1.8rem;

  > * {
    color: ${colors.brown};
  }
`;

export const AdvantageInfo = styled.div`
  display: flex;
  flex-direction: column;

  width: 17rem;
  color: ${colors.brown};
  font-weight: 400;

  h2 {
    font-family: "Lilita One";
    font-size: 2rem;
    text-transform: uppercase;
  }

  p {
    color: ${colors.brown_secondary};
    font-size: 1.6rem;
  }
`;

export const VerticalLine = styled.div`
  border-left: 1px solid ${colors.brown};
  height: 6rem;
`;
