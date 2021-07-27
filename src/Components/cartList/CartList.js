import React from "react";
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

export default CartList;
