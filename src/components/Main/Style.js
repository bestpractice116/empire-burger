import styled from "styled-components";
import { device } from "../../utils/constants/sizes";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 117rem;
  margin: 0 auto;
  margin-bottom: 10rem;

  @media screen and (${device.laptop}) {
    width: 90rem;
  }
`;
