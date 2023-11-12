import React, {ReactNode, useReducer} from "react";
import ItemsProvider from "./ItemsProvider";
import {initialState, productsReducer} from "../hooks/useProductsReducer";


interface Props {
    children: ReactNode;
}

const ProductsProvider: React.FC<Props> = ({children}: Props) => {
    const [state, dispatch] = useReducer(productsReducer, initialState);
    return (
        <ItemsProvider.Provider value={{state, dispatch}}>
            {children}
        </ItemsProvider.Provider>
    );
}

export default ProductsProvider;
