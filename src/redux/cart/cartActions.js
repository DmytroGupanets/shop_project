import { createAction } from "@reduxjs/toolkit";

export const addToCart = createAction("cart/addToCart");
export const removeFromCart = createAction("cart/removeFromCartByID");
export const createOrder = createAction("cart/createOrder");
export const setLoader = createAction("cart/setLoader");
export const setError = createAction("cart/setError");
export const resetError = createAction("cart/resetError");
