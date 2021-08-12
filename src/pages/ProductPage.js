import { NavLink, Route, Switch } from "react-router-dom";
import ProductList from "../Components/productList/ProductList";
import Section from "../Components/section/Section";
import { productsRoutes } from "../routes/productsRoutes";
import colors from "../styles/colors";
import { ProductPageContainer } from "./ProductPageStyled";

const ProductPage = ({ match }) => {
  return (
    <ProductPageContainer colors={colors}>
      {productsRoutes.map((route) => (
        <li className="productItem" key={route.path}>
          <NavLink
            to={{
              pathname: match.url + route.path,
              state: { category: route.category },
            }}
            exact={route.exact}
            className="navLink"
            activeClassName="activeNavLink"
          >
            {route.name}
          </NavLink>
        </li>
      ))}
      <Switch>
        {productsRoutes.map((route) => (
          <Route
            path={match.path + route.path}
            component={route.component}
            exact={route.exact}
            key={route.path}
          />
        ))}
      </Switch>
    </ProductPageContainer>
  );
};

export default ProductPage;
