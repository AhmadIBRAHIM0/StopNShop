import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import ProductsProvider from "./src/providers/ProductsProvider";
import {combineReducers} from 'redux';
import {productsReducer} from './src/hooks/useProductsReducer';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import ShopNavigator from "./src/navigation/ShopNavigator";
import cartReducer from "./src/hooks/useCartReducer";
import {ordersReducer} from "./src/hooks/useOrdersReducer";

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    orders: ordersReducer
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
                    <ShopNavigator/>
                </ProductsProvider>
            </Provider>
        </NavigationContainer>
    );
}

export default App;
