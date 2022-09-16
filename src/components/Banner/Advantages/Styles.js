import styled from "styled-components";
import { colors } from "../../../styles/Global";
import { device } from "../../../utils/constants/sizes";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  position: absolute;
  height: 10.1rem;
  width: 90rem;
  bottom: -60px;

  background-color: ${colors.white};
  box-shadow: 0 4px 40px ${colors.onhover};
  border-radius: 1rem;
  padding: 0.5rem;

  @media screen and (${device.tablet}) {
    width: 80rem;
  }

  @media screen and (${device.ipad}) {
    width: 60rem;
    height: 20rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: transparent;
    box-shadow: none;
    bottom: -160px;
  }
`;

export const Advantage = styled.div`
  display: flex;

  @media screen and (${device.ipad}) {
    justify-content: center;
    width: 29rem;
    padding: 3rem 2rem;
    background-color: ${colors.white};

    :nth-child(1) {
      border-radius: 1rem 0 0 1rem;
    }

    :nth-child(3) {
      border-radius: 0 1rem 1rem 0;
    }

    :nth-child(5) {
      border-top: 2px solid ${colors.white};
      border-radius: 0 0 1rem 1rem;
    }
  }
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

  @media screen and (${device.tablet}) {
    width: 5rem;
    height: 5rem;
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

  @media screen and (${device.tablet}) {
    width: 15rem;
    text-overflow: ellipsis;

    h2 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1.4rem;
    }
  }
`;

export const VerticalLine = styled.div`
  border-left: 1px solid ${colors.brown};
  height: 6rem;

  @media screen and (${device.ipad}) {
    display: none;
  }
`;
