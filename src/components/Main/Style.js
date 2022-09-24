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

  @media screen and (${device.tablet}) {
    width: 80rem;
  }

  @media screen and (${device.ipad}) {
    width: fit-content;
  }

  @media screen and (${device.mobile_medium}) {
    margin-bottom: 6.4rem;
  }
`;
