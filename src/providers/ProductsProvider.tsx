import React, {ReactNode, useReducer} from "react";
import ItemsProvider from "./ItemsProvider";
import {initialProductState, productsReducer} from "../hooks/useProductsReducer";


export interface ChildrenProps {
    children?: ReactNode;
}

const ProductsProvider: React.FC<ChildrenProps> = ({children}: ChildrenProps) => {
    const [state, dispatch] = useReducer(productsReducer, initialProductState);
    return (
        <ItemsProvider.Provider value={{state, dispatch}}>
            {children}
        </ItemsProvider.Provider>
    );
}

export default ProductsProvider;
