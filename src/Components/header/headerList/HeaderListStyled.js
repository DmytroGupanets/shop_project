import styled from "styled-components";

export const HeaderListStyled = styled.ul`
  display: flex;

  .headerItem:not(:first-child) {
    margin-left: 20px;
  }

  .navLink {
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    color: ${(props) => props.colors.darkColors.main};

    &:hover,
    &:focus {
      color: ${(props) => props.colors.darkColors.active};
    }
  }
`;
