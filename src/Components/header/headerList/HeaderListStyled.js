import styled from "styled-components";

export const HeaderListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  width: 100vw;
  height: calc(100vh - 60px);
  background-color: #424242;

  .headerItem:not(:first-child) {
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

  @media (min-width: 768px) {
    margin-top: 0;
    flex-direction: row;
    background-color: inherit;

    .headerItem:not(:first-child) {
      margin-top: 0;
      margin-left: 20px;
    }

    .navLink {
      font-weight: 500;
    }
  }
`;
