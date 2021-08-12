import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import mainRoutes from "../../routes/mainRoutes";
// import CartList from "../cartList/CartList";
// import AdvForm from "../admin/AdvForm";
// import ProductList from "../productList/ProductList";
// import Section from "../section/Section";
import { getAllAdvByCategory } from "../../services/Api";

// const getDataByCategory = async (category) => {
//   const response = await getAllAdvByCategory(category);
//   return response.data
//     ? Object.keys(response.data).map((key) => ({
//         id: key,
//         ...response.data[key],
//       }))
//     : [];
// };

class Main extends Component {
  // state = {
  //   cart: [],
  //   products: { phones: [], laptops: [] },
  // };

  // async componentDidMount() {
  //   const phones = await getDataByCategory("phones");
  //   const laptops = await getDataByCategory("laptops");

  //   this.setState({
  //     products: { phones, laptops },
  //   });
  // }

  // addNewAdv = (product) => {
  //   this.setState((prevState) => ({
  //     products: {
  //       ...prevState.products,
  //       [product.category]: [...prevState.products[product.category], product],
  //     },
  //   }));
  // };

  // addToCart = (product) => {
  //   this.setState((prevState) => ({
  //     cart: [...prevState.cart, product],
  //   }));
  // };

  // removeFromCart = (id) => {
  //   this.setState((prevState) => ({
  //     cart: prevState.cart.filter((product) => product.id !== id),
  //   }));
  // };

  // resetCart = () => {
  //   this.setState({ cart: [] });
  // };

  render() {
    return (
      <main>
        <Switch>
          {mainRoutes.map((route) => (
            <Route
              path={route.path}
              component={route.component}
              exact={route.exact}
              key={route.path}
            ></Route>
          ))}
        </Switch>
      </main>
    );
  }
}

export default Main;
