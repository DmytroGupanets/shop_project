import React from "react";

const CartListItem = ({ name, price, id, removeFromCart }) => {
  const removeItem = () => {
    removeFromCart(id);
  };

  return (
    <li>
      <h3>{name}</h3>
      <p>{price}</p>
      <button type="button" onClick={removeItem}>
        Remove
      </button>
    </li>
  );
};

export default CartListItem;
