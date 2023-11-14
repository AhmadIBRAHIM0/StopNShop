export default class CartItem {
    constructor(
        public quantity: number,
        public price: number,
        public title: string,
        public sum: number
    ) {}
}