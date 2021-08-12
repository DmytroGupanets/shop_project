import { createSelector } from "@reduxjs/toolkit";

export const getFilterValue = (state) => state.products.filter;

const productsSelector = (state, category) => state.products.items[category];

export const getProductItems = createSelector(
  [productsSelector, getFilterValue],
  (products, filter) =>
    products.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    )
);
