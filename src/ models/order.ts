import {CartItemType} from "../screens/shop/CartScreen";
import CartItem from "./cart-item";
import moment from 'moment';

export default class Order {
    constructor(
        public id: string,
        public items: CartItem[] | CartItemType[],
        public amount: number,
        public date: Date
    ) {
    }

    get readableDate() {
        return moment(this.date).format('MMMM Do YYYY, hh:mm');
    }
}