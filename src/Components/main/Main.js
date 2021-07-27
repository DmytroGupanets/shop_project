import React, { Component } from "react";
import data from "../../data";
import CartList from "../cartList/CartList";
import AdvForm from "../admin/AdvForm";
import ProductList from "../productList/ProductList";
import Section from "../section/Section";

class Main extends Component {
  state = {
    cart: [],
    ...data,
  };

  addNewAdv = (product) => {
    this.setState((prevState) => ({
      [product.category]: [...prevState[product.category], product],
    }));
  };

  addToCart = (product) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, product],
    }));
  };

  removeFromCart = (id) => {
    this.setState((prevState) => ({
      cart: prevState.cart.filter((product) => product.id !== id),
    }));
  };

  resetCart = () => {
    this.setState({ cart: [] });
  };

  render() {
    return (
      <main>
        <Section title="Администрирование">
          <AdvForm addNewAdv={this.addNewAdv} />
        </Section>

        <Section title="Корзина">
          <CartList
            cart={this.state.cart}
            removeFromCart={this.removeFromCart}
            resetCart={this.resetCart}
          />
        </Section>

        <Section title="Мобильные телефоны">
          <ProductList
            products={this.state.phones}
            addToCart={this.addToCart}
          />
        </Section>

        <Section title="Ноутбуки">
          <ProductList
            products={this.state.laptops}
            addToCart={this.addToCart}
          />
        </Section>
      </main>
    );
  }
}

export default Main;
