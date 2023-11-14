// import Product from "../ models/product";
// import React, {useReducer} from "react";
// import {ChildrenProps} from "./ProductsProvider";
// import CartItem from "../ models/cart-item";
// import {cartReducer, initialCartState} from "../hooks/userCartReducer";
//
// export interface CartState {
//     items: { [key: string]: CartItem };
//     totalAmount: number;
// }
//
// export type CartAction =
//     | { type: 'ADD_TO_CART' , product: Product}
//     | { type: 'REMOVE_FROM_CART' } & Partial<Product>
//
// export const addToCart = (product: Product): CartAction => {
//     return {type: 'ADD_TO_CART', product};
// }
//
// export const CartContext = React.createContext<{
//     state: CartState;
//     dispatch: React.Dispatch<CartAction>;
// }>({
//     state: {items: {}, totalAmount: 0},
//     dispatch: () => {
//     }
// });
//
// const CartProvider: React.FC<ChildrenProps> = ({children}: ChildrenProps = null) => {
//     const [state, dispatch] = useReducer(cartReducer, initialCartState);
//     return (
//         <CartContext.Provider value={{state, dispatch}}>
//             {children}
//         </CartContext.Provider>
//     );
// }
//
// export default CartProvider;
