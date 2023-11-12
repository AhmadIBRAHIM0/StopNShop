import Product from "../../ models/product";
import PRODUCTS from "../../data/dummy-data";

export interface ProductState {
    availableProducts: Product[];
    userProducts: Product[];
}

const initialState: ProductState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter((product: Product) => product.ownerId === 'u1')
};

export default (state = initialState, action: any) => {
    return state;
};
