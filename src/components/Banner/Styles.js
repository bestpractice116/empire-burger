import styled from "styled-components";
import { colors } from "../../styles/Global";
import { device } from "../../utils/constants/sizes";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  margin-bottom: 13rem;

  img {
    width: 100%;
    height: 545px;
    object-fit: cover;
    top: 0;
    z-index: -1;
  }

  @media screen and (${device.ipad}) {
    margin-bottom: 24rem;

    img {
      object-position: 57% 50%;
    }
  }
`;

export const AdContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 117rem;

  color: ${colors.brown};

  h2,
  h4 {
    width: fit-content;
  }

  h2 {
    font-family: "Lilita One";
    text-transform: uppercase;
    font-size: 7.7rem;
    margin-bottom: 1rem;

    span {
      color: ${colors.yellow};
    }
  }

  h4 {
    font-size: 2.2rem;
    font-weight: 400;
    margin-bottom: 1.4rem;

    :first-child {
      font-weight: 700;
      margin: 0;
    }

    span {
      font-weight: 900;
      background-color: ${colors.yellow};
      border-radius: 0.5rem;
      padding: 0.2rem 0.5rem;
    }
  }

  @media screen and (${device.laptop}) {
    max-width: 90rem;

    h2 {
      font-size: 5.7rem;
    }

    h4 {
      font-size: 2rem;
    }
  }

  @media screen and (${device.tablet}) {
    max-width: 80rem;

    h2 {
      font-size: 4.8rem;
    }

    h4 {
      font-size: 1.7rem;
    }
  }

  @media screen and (${device.ipad}) {
    max-width: 60rem;
    top: 100px;

    h2 {
      font-size: 4rem;
    }

    h4 {
      font-size: 1.5rem;
    }
  }

  @media screen and (${device.mobile_medium}) {
    width: 36rem;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  height: 5.2rem;
  width: fit-content;
  padding: 1rem 2rem;

  background-color: ${colors.red};
  color: ${colors.white};
  font-size: 2.2rem;
  font-weight: 700;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: all 0.4s ease;

  &:hover {
    box-shadow: inset 10em 0 0 0 #cd0000bb;
  }

  @media screen and (${device.laptop}) {
    font-size: 1.8rem;
  }

  @media screen and (${device.tablet}) {
    font-size: 1.5rem;
  }

  @media screen and (${device.ipad}) {
    font-size: 1.3rem;

    height: 3.5rem;
    padding: 0.5rem 1rem;
  }

  @media screen and (${device.mobile_medium}) {
    width: 15rem;
  }
`;
