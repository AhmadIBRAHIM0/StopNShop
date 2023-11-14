import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import ProductsProvider from "./src/providers/ProductsProvider";
import {combineReducers} from 'redux';
import {productsReducer} from './src/hooks/useProductsReducer';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import ProductsNavigator from "./src/navigation/ShopNavigator";

const rootReducer = combineReducers({
    products: productsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer
});

function App(): React.JSX.Element {

    return (
        <NavigationContainer>
            <Provider store={store}>
                <ProductsProvider>
                    <ProductsNavigator/>
                </ProductsProvider>
            </Provider>
        </NavigationContainer>
    );
}

export default App;
