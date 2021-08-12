import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllAdvByCategoryOperation } from "../../redux/products/productsOperations";
import ProductListItem from "./productListItem/ProductListItem";
import { ProductListStyled } from "./ProductListStyled";
import { getProductItems } from "../../redux/products/productSelectors";
import Filter from "../filter/Filter";
import { setFilter } from "../../redux/products/productsActions";

class ProductList extends Component {
  async componentDidMount() {
    await this.props.getAllAdvByCategoryOperation(this.props.category);
    this.props.setFilter("");
  }

  render() {
    return (
      <>
        <Filter />
        <ProductListStyled>
          {this.props.products.map((product) => (
            <ProductListItem
              product={product}
              key={product.id}
              addToCart={this.props.addToCart}
            />
          ))}
        </ProductListStyled>
      </>
    );
  }
}

const mapStateToProps = (state, props) => ({
  category: props.location.state.category,
  products: getProductItems(state, props.location.state.category),
});

export default connect(mapStateToProps, {
  getAllAdvByCategoryOperation,
  setFilter,
})(ProductList);
