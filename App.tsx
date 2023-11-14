import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import ProductsProvider from "./src/providers/ProductsProvider";
import {combineReducers} from 'redux';
import {productsReducer} from './src/hooks/useProductsReducer';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import ProductsNavigator from "./src/navigation/ShopNavigator";
import cartReducer from "./src/hooks/useCartReducer";

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
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
