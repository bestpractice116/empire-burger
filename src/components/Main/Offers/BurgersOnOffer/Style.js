import styled from "styled-components";
import { colors } from "../../../../styles/Global";
import { device } from "../../../../utils/constants/sizes";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); //1fr 1fr
  max-width: fit-content;
  grid-gap: 3rem;
  row-gap: 2.6rem;
  margin: 0 auto;

  img {
    object-fit: cover;
  }

  article:nth-child(1) {
    grid-row: 1/3;
  }

  article {
    position: relative;

    span {
      position: absolute;
      bottom: 2rem;
      right: 2rem;

      h4 {
        font-size: 1.9rem;
        color: ${colors.white};
        font-weight: 100;
        margin-bottom: 1rem;
      }

      h3 {
        color: ${colors.white};
        font-family: "Lilita One";
        font-size: 3.7rem;
        text-transform: uppercase;
        line-height: 2.2rem;
      }
    }
  }

  @media screen and (${device.laptop}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 1rem;

    article:nth-child(1) {
      grid-column: 1/3;
    }
  }

  @media screen and (${device.ipad}) {
    display: flex;
    flex-direction: column;

    article {
      width: 40rem;

      span {
        h4 {
          font-size: 1.6rem;
          margin-bottom: 0.25rem;
        }

        h3 {
          font-size: 2.7rem;
        }
      }

      img {
        width: 40rem;
      }
    }
  }

  @media screen and (${device.mobile_medium}) {
    article {
      width: 37rem;

      img {
        width: 37rem;
      }
    }
  }
`;

export const OfferInfo = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;

  h3 {
    color: ${(props) => props.color};
    font-family: "Lilita One";
    font-size: 2.5rem;
    text-transform: uppercase;
    line-height: 2.2rem;
    font-weight: 400;
  }

  h4 {
    width: fit-content;
    font-size: 1.8rem;
    color: ${(props) => props.color};
    font-weight: 400;
  }

  @media screen and (${device.ipad}) {
    h3 {
      font-size: 2rem;
    }

    h4 {
      font-size: 1.6rem;
    }
  }
`;
