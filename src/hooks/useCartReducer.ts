import Product from "../ models/product";
import CartItem from "../ models/cart-item";

export const initialCartState: CartState = {
    items: {},
    totalAmount: 0
}

export interface CartState {
    items: { [key: string]: CartItem };
    totalAmount: number;
}

export type CartAction =
    | { type: 'ADD_TO_CART', product: Product }
    | { type: 'REMOVE_FROM_CART', id: string };

export const addToCart = (product: Product) => {
    return {type: 'ADD_TO_CART', product: product};
}

export const removeFromCart = (id: string) => {
    return {type: 'REMOVE_FROM_CART', id: id};
}

export default (
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
        console.log('updatedOrCreateCartItem', state);
        return {
            ...state,
            items: {...state.items, [addedProduct.id]: updatedOrCreateCartItem},
            totalAmount: state.totalAmount + prodPrice
        };
    }

    if (action.type === 'REMOVE_FROM_CART') {
        const selectedCartItem: CartItem = state.items[action.id];
        const currentQty: number = selectedCartItem.quantity;
        let updatedCartItems: { [key: string]: CartItem };
        if (currentQty > 1) {
            const updatedCartItem: CartItem = new CartItem(
                selectedCartItem.quantity - 1,
                selectedCartItem.price,
                selectedCartItem.title,
                selectedCartItem.sum - selectedCartItem.price
            );
            updatedCartItems = {...state.items, [action.id]: updatedCartItem};
        } else {
            updatedCartItems = {...state.items};
            delete updatedCartItems[action.id];
        }
        return {
            ...state,
            items: updatedCartItems,
            totalAmount: state.totalAmount - selectedCartItem.price
        };
    }

    return state;
}
