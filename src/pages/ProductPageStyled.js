import styled from "styled-components";

export const ProductPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  /* width: 100vw; */
  /* height: calc(100vh - 60px); */
  /* background-color: #424242; */

  .navList {
    list-style: none;
  }
  .productItem:not(:first-child) {
    margin-top: 30px;
  }

  .navLink {
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    color: ${(props) => props.colors.darkColors.main};
    font-size: 18px;
    font-weight: 700;

    &:hover,
    &:focus {
      color: ${(props) => props.colors.darkColors.active};
    }
  }

  .activeNavLink {
    color: ${(props) => props.colors.darkColors.active}:;
  }
`;
