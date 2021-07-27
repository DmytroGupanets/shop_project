import styled from "styled-components";

export const ContainerStyled = styled.div`
  width: 310px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 15px;

  @media screen and (min-width: 768px) {
    width: 730px;
  }

  @media screen and (min-width: 1280px) {
    width: 1200px;
  }
`;
