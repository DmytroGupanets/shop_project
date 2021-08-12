import { createAction } from "@reduxjs/toolkit";

export const addProduct = createAction("products/addProduct");
export const removeProduct = createAction("products/removeProduct");
export const getPhones = createAction("products/getPhones");
export const getLaptops = createAction("products/getLaptops");
export const getAllProducts = createAction("products/getAllproducts");
export const setLoader = createAction("products/setLoader");
export const setError = createAction("products/setError");
export const resetError = createAction("products/resetError");
export const productsByCategory = createAction("products/productsByCategory");
export const setFilter = createAction("product/setFilter");
