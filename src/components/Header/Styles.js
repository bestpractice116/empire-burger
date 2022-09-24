import styled from "styled-components";
import { colors } from "../../styles/Global";
import { device } from "../../utils/constants/sizes";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  height: 6.3rem;
  width: 100%;

  background-color: rgba(59, 32, 11, 0.05);
  color: ${colors.brown};
  backdrop-filter: blur(10px);
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  width: 110rem;

  @media screen and (${device.laptop}) {
    width: 90rem;
  }

  @media screen and (${device.tablet}) {
    width: 80rem;
  }

  @media screen and (${device.ipad}) {
    width: 60rem;
  }

  @media screen and (${device.mobile_medium}) {
    width: 36rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8rem;

  h1 {
    font-weight: 400;
    text-transform: uppercase;
    font-size: 2.9rem;
    width: fit-content;

    span {
      font-weight: 900;
    }
  }

  @media screen and (${device.laptop}) {
    margin-right: 5rem;

    h1 {
      font-size: 2.05rem;
    }
  }

  @media screen and (${device.tablet}) {
    margin-right: 3rem;

    h1 {
      font-size: 1.8rem;
    }
  }
`;

export const Nav = styled.ul`
  display: flex;
  list-style: none;
  margin-right: 8rem;

  li {
    font-size: 1.8rem;
    text-decoration: none;
    margin-right: 1.6rem;
    line-height: 2.5rem;
  }

  @media screen and (${device.laptop}) {
    margin-right: 5rem;

    li {
      font-size: 1.5rem;
      margin-right: 1.4rem;
    }
  }

  @media screen and (${device.ipad}) {
    margin-right: 0;

    li {
      margin-right: 0;
      margin-left: 1.4rem;
    }
  }

  @media screen and (${device.mobile_medium}) {
    display: none;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  img {
    width: 3rem;
    margin-right: 1.8rem;
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 12rem;
    padding: 0.4rem 1.6rem;
    margin-left: 1.3rem;
    border: none;
    border-radius: 4px;
    background-color: ${colors.yellow};
    outline: none;

    span {
      font-weight: 700;
      font-size: 1.6rem;
    }
  }

  @media screen and (${device.ipad}) {
    display: none;
  }
`;

export const VerticalLine = styled.div`
  border: 1px solid ${colors.brown};
  height: 4.7rem;
  margin-left: 1.7rem;
`;
