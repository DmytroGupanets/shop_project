import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  addProduct,
  getAllProducts,
  getLaptops,
  getPhones,
  productsByCategory,
  removeProduct,
  resetError,
  setError,
  setFilter,
  setLoader,
} from "../products/productsActions";

const productsItemsReducer = createReducer(
  { phones: [], laptops: [] },
  {
    [addProduct]: (state, { payload }) => ({
      ...state,
      [payload.category]: [...state[payload.category], payload],
    }),
    [removeProduct]: (state, { payload }) => ({
      ...state,
      [payload.category]: state[payload.category].filter(
        (item) => item.id !== payload.id
      ),
    }),
    [productsByCategory]: (state, { payload }) => {
      if (payload.length) {
        return { ...state, [payload[0].category]: payload };
      }
    },
    [getPhones]: (state, { payload }) => ({ ...state, phones: payload }),
    [getLaptops]: (state, { payload }) => ({ ...state, laptops: payload }),
    [getAllProducts]: (_, { payload }) => ({ ...payload }),
  }
);

const productsLoaderReducer = createReducer(false, {
  [setLoader]: (state) => !state,
});

const productsErrorReducer = createReducer("", {
  [setError]: (_, { payload }) => payload,
  [resetError]: () => "",
});

const productsFilterReducer = createReducer("", {
  [setFilter]: (_, { payload }) => payload,
});

const productsReducer = combineReducers({
  items: productsItemsReducer,
  isLoading: productsLoaderReducer,
  error: productsErrorReducer,
  filter: productsFilterReducer,
});

export default productsReducer;
