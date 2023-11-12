import Product from "../ models/product";
import {ProductAction, ProductState} from "../providers/ItemsProvider";
import PRODUCTS from "../data/dummy-data";

export const initialState: ProductState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter((product: Product) => product.ownerId === 'u1')
}

export const productsReducer = (
    state: ProductState = initialState,
    action: ProductAction
) => {
    if (action.type === 'ADD_PRODUCT') {
        const newProduct = new Product(
            new Date().toString(),
            'u1',
            action.title || '',
            action.imageUrl || '',
            action.description || '',
            action.price || 0
        );
        return {
            ...state,
            availableProducts: state.availableProducts.concat(newProduct),
            userProducts: state.userProducts.concat(newProduct)
        };
    }

    if (action.type === 'UPDATE_PRODUCT') {
        const productIndex = state.userProducts.findIndex(
            (product: Product) => product.id === action.id
        );
        const updatedProduct = new Product(
            action.id,
            state.userProducts[productIndex].ownerId,
            action.title || '',
            action.imageUrl || '',
            action.description || '',
            state.userProducts[productIndex].price
        );
        const updatedUserProducts = [...state.userProducts];
        updatedUserProducts[productIndex] = updatedProduct;
        const availableProductIndex = state.availableProducts.findIndex(
            (product: Product) => product.id === action.id
        );
        const updatedAvailableProducts = [...state.availableProducts];
        updatedAvailableProducts[availableProductIndex] = updatedProduct;
        return {
            ...state,
            availableProducts: updatedAvailableProducts,
            userProducts: updatedUserProducts
        };
    }

    if (action.type === 'DELETE_PRODUCT') {
        return {
            ...state,
            userProducts: state.userProducts.filter(
                (product: Product) => product.id !== action.id
            ),
            availableProducts: state.availableProducts.filter(
                (product: Product) => product.id !== action.id
            )
        };
    }

    return state;
}
