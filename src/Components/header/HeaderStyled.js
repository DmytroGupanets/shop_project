import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0px 40px;
  height: 60px;
  border-bottom: 2px solid ${(props) => props.colors.darkColors.main};
  background-color: ${(props) => props.colors.darkColors.background};
  color: ${(props) => props.colors.darkColors.title};

  .headerLogo {
    margin: 0;
    font-size: 32px;
    line-height: 1.26;
    text-decoration: underline;
  }

  .burgerLogo {
    width: 40px;
    height: 40px;

    fill: ${(props) => props.colors.darkColors.main};
  }
`;
