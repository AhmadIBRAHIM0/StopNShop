import {CartItemType} from "../screens/shop/CartScreen";
import CartItem from "./cart-item";

export default class Order {
    constructor(
        public id: string,
        public items: CartItem[] | CartItemType[],
        public amount: number,
        public date: Date
    ) {
    }
}