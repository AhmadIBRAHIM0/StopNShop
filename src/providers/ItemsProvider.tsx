import React from "react";
import Product from "../ models/product";
import PRODUCTS from "../data/dummy-data";
import {initialState} from "../hooks/useProductsReducer";

export interface ProductState {
    availableProducts: Product[];
    userProducts: Product[];
}

export type ProductAction =
    | { type: 'DELETE_PRODUCT' } & Partial<Product>
    | { type: 'ADD_PRODUCT'} & Partial<Product>
    | { type: 'UPDATE_PRODUCT'} & Product

const ItemContext = React.createContext<{
    state: ProductState;
    dispatch: React.Dispatch<ProductAction>;
}>({
    state: initialState,
    dispatch: () => {
    }
});

export default ItemContext;
