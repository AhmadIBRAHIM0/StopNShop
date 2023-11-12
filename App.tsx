import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import ProductsProvider from "./src/providers/ProductsProvider";
import {combineReducers, createStore} from 'redux';
import {productsReducer} from './src/hooks/useProductsReducer';
import ProductOverviewScreen from "./src/screens/shop/ProductOverviewScreen";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

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
                    <ProductOverviewScreen/>
                </ProductsProvider>
            </Provider>
        </NavigationContainer>
    );
}

export default App;
