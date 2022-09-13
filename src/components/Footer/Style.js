import styled from "styled-components";
import { colors } from "../../styles/Global";

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
`;

export const HorizontalLine = styled.div`
  width: 110rem;
  margin: 0 auto;
  border-bottom: 1px solid rgba(29, 6, 5, 0.15);
`;
