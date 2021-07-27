import React from "react";
import { ContainerStyled } from "./ContainerStyled";

const Container = ({ children }) => (
  <ContainerStyled className="container">{children}</ContainerStyled>
);

export default Container;
