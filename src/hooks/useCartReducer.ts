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
    | { type: 'REMOVE_FROM_CART' } & Partial<Product>

export const addToCart = (product: Product) => {
    return {type: 'ADD_TO_CART', product: product};
}

export default (
    state: CartState = initialCartState,
    action: CartAction
) => {
    if (action.type === 'ADD_TO_CART') {
        const addedProduct: Product = action.product;
        console.log('addedProduct', addedProduct);
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

    console.log('HHHHHHHHHHHHHHHH', state);

    return state;
}
