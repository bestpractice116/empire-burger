import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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
        color: #fff;
        font-weight: 100;
        margin-bottom: 1rem;
      }

      h3 {
        color: #fff;
        font-family: "Lilita One";
        font-size: 3.7rem;
        text-transform: uppercase;
        line-height: 2.2rem;
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
    font-size: 1.8rem;
    color: ${(props) => props.color};
    font-weight: 400;
  }
`;
