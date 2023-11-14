import CartItem from "../ models/cart-item";
import Order from "../ models/order";
import {CartItemType} from "../screens/shop/CartScreen";

export const initialOrdersState: OrdersState = {
    orders: []
};

export interface OrdersState {
    orders: Order[];

}

export type OrdersAction =
    | { type: 'SET_ORDERS', orders: Order[] }
    | { type: 'ADD_ORDER', items: CartItem[] | CartItemType[], amount: number };

export const setOrders = (orders: Order[]) => {
    return {type: 'SET_ORDERS', orders: orders};
}

export const addOrder = (items: CartItem[] | CartItemType[], amount: number) => {
    return {type: 'ADD_ORDER', items: items, amount: amount};
}

export const ordersReducer = (
    state: OrdersState = initialOrdersState,
    action: OrdersAction
) => {
    if (action.type === 'SET_ORDERS') {
        return {
            orders: action.orders
        };
    }

    if (action.type === 'ADD_ORDER') {
        const newOrder = new Order(
            new Date().toString(),
            action.items,
            action.amount,
            new Date()
        );
        return {
            ...state,
            orders: state.orders.concat(newOrder)
        };
    }

    return state;
}