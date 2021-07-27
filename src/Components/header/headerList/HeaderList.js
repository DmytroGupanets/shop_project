import React from "react";
import mainRoutes from "../../../routes/mainRoutes";
import colors from "../../../styles/colors";
import { HeaderListStyled } from "./HeaderListStyled";

const HeaderList = ({ language = "en" }) => {
  return (
    <HeaderListStyled colors={colors}>
      {mainRoutes.map((item) => (
        <li className="headerItem" key={item.name.en}>
          <a href={item.path} className="navLink">
            {item.name[language]}
          </a>
        </li>
      ))}
    </HeaderListStyled>
  );
};

export default HeaderList;
