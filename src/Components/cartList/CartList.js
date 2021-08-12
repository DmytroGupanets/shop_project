import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/cart/cartActions";
import { getCartItems } from "../../redux/cart/cartSelectors";
import CartListItem from "./cartListItem/CartListItem";

const CartList = ({ cart, removeFromCart, resetCart }) => {
  const clearCart = () => {
    resetCart();
  };

  return (
    <>
      {cart.length ? (
        <>
          <ul className="cartList">
            {cart.map((product) => (
              <CartListItem
                key={product.id}
                {...product}
                removeFromCart={removeFromCart}
              />
            ))}
          </ul>

          <div className="cartControl">
            <button type="button" onClick={clearCart}>
              Clear All
            </button>
            <button type="button">Make order</button>
          </div>
        </>
      ) : (
        <p>"Add items to Cart"</p>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: getCartItems(state),
});

export default connect(mapStateToProps, { removeFromCart })(CartList);
