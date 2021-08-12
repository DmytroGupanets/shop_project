import React from "react";
import { ProductListItemStyled } from "./ProductListItemStyled";
import colors from "../../../styles/colors";
import { addToCart } from "../../../redux/cart/cartActions";
import { connect } from "react-redux";

const ProductListItem = ({ product, addToCart }) => {
  const { name, image, description, isSale, price, id } = product;

  const addProduct = () => {
    addToCart({ name, price, id });
  };

  return (
    <ProductListItemStyled colors={colors}>
      <div className="productCardWrapper">
        <h3 className="productCardName">{name}</h3>
        <img className="productCardPicture" src={image} alt={name} />
        <p className="productCardSale">
          Sale: {isSale ? "Действует акционная цена" : "В акции не участвует"}
        </p>
        <p className="productCardDescription">{description}</p>
        {/* <ul className="productCardColorsList"> */}
        {/* {colors.map((color) => (
            <li
              style={{ backgroundColor: color }}
              backgroundColor={color}
              key={color}
            >
              {color}
            </li>
          ))} */}
        {/* </ul> */}
        <p className="productCardPrice">
          Цена: <span>{price}</span>
        </p>

        <div className="productCardControls">
          <button
            className="productCardAddBtn"
            type="button"
            onClick={addProduct}
          >
            Add to cart
          </button>
          <button className="productCardMoreInfoBtn" type="button">
            See details
          </button>
        </div>
      </div>
    </ProductListItemStyled>
  );
};

export default connect(null, { addToCart })(ProductListItem);
