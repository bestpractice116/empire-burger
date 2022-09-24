import styled from "styled-components";
import { colors } from "../../styles/Global";
import { device } from "../../utils/constants/sizes";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  h2 {
    color: ${colors.brown_primary};
    text-transform: uppercase;
    font-size: 3.2rem;
    font-family: "Lilita One";
    margin-bottom: 0.4rem;
    line-height: 3.5rem;
  }

  h3 {
    color: ${colors.brown_secondary};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.2rem;
    margin-bottom: 3.2rem;
  }

  @media screen and (${device.mobile_medium}) {
    h2 {
      font-size: 2.5rem;
    }
  }
`;

export const Bottom = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 13.5rem;
  width: 100vw;
  background-color: ${colors.white};

  h4 {
    font-family: "Inter";
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.9rem;
    color: #020e1f4d;
    text-align: center;
    margin: 1.1rem 0;

    span {
      font-weight: 700;
      color: #020e1fb0;
    }
  }

  @media screen and (${device.mobile_medium}) {
    height: fit-content;
  }
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 5rem;
  width: 110rem;
  margin: 2rem auto;

  div {
    display: flex;
    align-items: center;

    h1 {
      color: ${colors.yellow};
      font-size: 2.9rem;
      line-height: 3.2rem;
      font-weight: 400;
      margin-left: 0.4rem;
      text-transform: uppercase;

      span {
        font-weight: 900;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-right: 15.1rem;

    li {
      color: ${colors.brown};
      font-size: 1.8rem;
      margin-right: 3.2rem;
      line-height: 2.5rem;
      font-weight: 400;
    }
  }

  @media screen and (${device.laptop}) {
    width: 90rem;

    div {
      h1 {
        font-size: 2.05rem;
      }
    }

    ul {
      margin-right: 9rem;

      li {
        font-size: 1.8rem;
        margin-right: 1.8rem;
      }
    }
  }

  @media screen and (${device.tablet}) {
    width: 80rem;

    div {
      h1 {
        font-size: 1.8rem;
      }
    }

    ul {
      margin-right: 7.5rem;

      li {
        font-size: 1.6rem;
        margin-right: 1.6rem;
      }
    }
  }

  @media screen and (${device.ipad}) {
    width: 60rem;

    ul {
      margin-right: 0;

      li {
        font-size: 1.4rem;
        margin-right: 0;
        margin-left: 1.4rem;
      }
    }

    div > div {
      display: none;
    }
  }

  @media screen and (${device.mobile_medium}) {
    flex-direction: column;
    width: fit-content;
    height: fit-content;

    div {
      margin-bottom: 1.3rem;

      h1 {
        font-size: 2.9rem;
      }
    }

    div:has(ul) {
      flex-direction: column-reverse;
      margin: 0;
    }

    ul {
      flex-direction: column;
      text-align: center;
      margin-right: 0;

      li {
        font-size: 1.8rem;
        margin-left: 0;
        margin-bottom: 1.38rem;

        :last-child {
          margin-bottom: 0;
        }
      }
    }

    div > div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 2rem;
      height: fit-content;

      * > {
        height: fit-content;
        margin: 0;
        padding: 0;
        width: fit-content;
      }
    }

    div > svg {
      height: fit-content;
    }
  }
`;

export const HorizontalLine = styled.div`
  width: 110rem;
  margin: 0 auto;
  border-bottom: 1px solid rgba(29, 6, 5, 0.15);

  @media screen and (${device.laptop}) {
    width: 90rem;
  }

  @media screen and (${device.laptop}) {
    width: 38rem;
  }
`;
