import {CartAction, CartState} from "../providers/CartProvider";
import Product from "../ models/product";
import CartItem from "../ models/cart-item";

export const initialCartState: CartState = {
    items: {},
    totalAmount: 0
}

export const cartReducer = (
    state: CartState = initialCartState,
    action: CartAction
) => {
    if (action.type === 'ADD_TO_CART') {
        const addedProduct: Product = action.product;
        const prodPrice: number = addedProduct.price;
        const prodTitle: string = addedProduct.title;
        let updatedOrCreateCartItem: CartItem;
        if (state.items[addedProduct.id]) {
            updatedOrCreateCartItem = new CartItem(
                state.items[addedProduct.id].quantity + 1,
                prodPrice,
                prodTitle,
                state.items[addedProduct.id].sum + prodPrice
            );
        } else {
            updatedOrCreateCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
        }
        return {
            ...state,
            items: {...state.items, [addedProduct.id]: updatedOrCreateCartItem},
            totalAmount: state.totalAmount + prodPrice
        };
    }

    return state;
}
