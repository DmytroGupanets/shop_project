import React from "react";
import { NavLink } from "react-router-dom";
import mainRoutes from "../../../routes/mainRoutes";
import colors from "../../../styles/colors";
import { HeaderListStyled } from "./HeaderListStyled";

const HeaderList = ({ language = "en" }) => {
  return (
    <nav>
      <HeaderListStyled colors={colors}>
        {mainRoutes.map((item) => (
          <li className="headerItem" key={item.name.en}>
            <NavLink
              to={item.path}
              className="navLink"
              activeClassName="activeNavLink"
              exact={item.exact}
            >
              {item.name[language]}
            </NavLink>
          </li>
        ))}
      </HeaderListStyled>
    </nav>
  );
};

export default HeaderList;
