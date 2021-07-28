import React, { Component } from "react";
import CartList from "../cartList/CartList";
import AdvForm from "../admin/AdvForm";
import ProductList from "../productList/ProductList";
import Section from "../section/Section";
import { getAllAdvByCategory } from "../../services/Api";

const getDataByCategory = async (category) => {
  const response = await getAllAdvByCategory(category);
  return response.data
    ? Object.keys(response.data).map((key) => ({
        id: key,
        ...response.data[key],
      }))
    : [];
};

class Main extends Component {
  state = {
    cart: [],
    products: { phones: [], laptops: [] },
  };

  async componentDidMount() {
    const phones = await getDataByCategory("phones");
    const laptops = await getDataByCategory("laptops");

    this.setState({
      products: { phones, laptops },
    });
  }

  addNewAdv = (product) => {
    this.setState((prevState) => ({
      products: {
        ...prevState.products,
        [product.category]: [...prevState.products[product.category], product],
      },
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
            products={this.state.products.phones}
            addToCart={this.addToCart}
          />
        </Section>

        <Section title="Ноутбуки">
          <ProductList
            products={this.state.products.laptops}
            addToCart={this.addToCart}
          />
        </Section>
      </main>
    );
  }
}

export default Main;
