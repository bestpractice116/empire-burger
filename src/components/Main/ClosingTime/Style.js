import styled from "styled-components";
import { colors } from "../../../styles/Global";
import { device } from "../../../utils/constants/sizes";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (${device.laptop}) {
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const Hashtag = styled.div`
  h4 {
    font-size: 1.8rem;
    font-weight: 400;
    color: ${colors.brown_secondary};
  }

  h3 {
    font-size: 2.8rem;
    font-weight: 400;
    font-family: "Lilita One";
    text-transform: uppercase;
    color: ${colors.red};
  }

  @media screen and (${device.laptop}) {
    h3 {
      font-size: 4rem;
    }
  }
`;

export const Badge = styled.div`
  display: flex;
  width: 57rem;

  margin-right: 3rem;
  padding: 1.8rem 2.2rem;
  background-color: ${(props) => props.color};
  border-radius: 1rem;
  margin-bottom: 2rem;

  div {
    h3 {
      font-family: "Lilita One";
      font-size: 2.5rem;
      text-transform: uppercase;
      color: ${colors.brown_secondary};
      margin-bottom: 0.55rem;
    }

    h4 {
      color: ${colors.white};
      font-size: 1.6rem;
      margin-bottom: 1rem;
      font-weight: 400;
    }
  }

  @media screen and (${device.laptop}) {
    margin-bottom: 6.4rem;
  }
`;

export const VerticalLine = styled.div`
  border: 1px solid rgba(29, 6, 5, 0.4);
  height: 8.2rem;
  margin: auto 1.5rem;
`;
