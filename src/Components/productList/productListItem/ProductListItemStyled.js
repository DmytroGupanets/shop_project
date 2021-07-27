import styled from "styled-components";

export const ProductListItemStyled = styled.li`
  margin-top: 15px;

  @media screen and (min-width: 768px) {
    margin-left: 15px;
    flex-basis: calc((100% - 45px) / 3);
  }

  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 75px) / 5);
  }

  .productCardWrapper {
    border: 1px solid ${(props) => props.colors.darkColors.input};
    border-radius: 10px;
    padding: 5px;

    text-align: center;
  }

  .productCardName {
    font-size: 24px;
    margin-bottom: 10px;

    ms-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
    -ms-line-clamp: 2;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    display: -webkit-box;
    display: box;
    word-wrap: break-word;
    -webkit-box-orient: vertical;
    box-orient: vertical;
  }

  .productCardPicture {
    object-fit: contain;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    max-height: 200px;
  }

  .productCardSale {
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .productCardDescription {
    font-size: 14px;
    margin-bottom: 10px;

    text-align: start;

    -ms-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
    -ms-line-clamp: 5;
    -webkit-line-clamp: 5;
    line-clamp: 5;
    display: -webkit-box;
    display: box;
    word-wrap: break-word;
    -webkit-box-orient: vertical;
    box-orient: vertical;
  }

  .productCardColorsList {
    display: flex;
    justify-content: space-evenly;

    margin-bottom: 10px;

    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
  }

  .productCardPrice {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 700;
  }

  .productCardControls {
    display: flex;
    justify-content: center;
  }

  .productCardAddBtn {
    flex-grow: 1;
    padding: 5px;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    background-color: ${(props) => props.colors.darkColors.main};
    border-color: transparent;
    border-radius: 0 0 0 10px;
    cursor: pointer;
    transition: transform 100ms linear;

    &:hover,
    &:focus {
      background-color: ${(props) => props.colors.darkColors.active};
      transform: scale(1.05);
    }
  }

  .productCardMoreInfoBtn {
    flex-grow: 1;
    padding: 5px;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    background-color: ${(props) => props.colors.darkColors.main};
    margin-left: 1px;
    border-color: transparent;
    border-radius: 0 0 10px 0;
    cursor: pointer;
    transition: transform 250ms linear;

    &:hover,
    &:focus {
      background-color: ${(props) => props.colors.darkColors.active};
      transform: scale(1.05);
    }
  }
`;
