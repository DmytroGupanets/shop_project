import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  addToCart,
  createOrder,
  removeFromCart,
  resetError,
  setError,
  setLoader,
} from "./cartActions";

const cartItemsReducer = createReducer([], {
  [addToCart]: (state, action) => [...state, action.payload],
  [removeFromCart]: (state, action) =>
    state.filter((product) => product.id !== action.payload),
  [createOrder]: () => [],
});

const cartLoaderReducer = createReducer(false, {
  [setLoader]: (state) => !state,
});

const cartErrorReducer = createReducer("", {
  [setError]: (_, { payload }) => payload,
  [resetError]: () => "",
});

const cartReducer = combineReducers({
  items: cartItemsReducer,
  isLoading: cartLoaderReducer,
  error: cartErrorReducer,
});

export default cartReducer;
