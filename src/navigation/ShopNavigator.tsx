import {createStackNavigator} from '@react-navigation/stack';
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {Platform} from "react-native";
import React from "react";

const Stack = createStackNavigator();

const ProductsNavigator = (): React.JSX.Element => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
            }}
        >
            <Stack.Screen
                name="ProductsOverview"
                component={ProductOverviewScreen}
                options={{
                    title: 'All Products'
                }}
            />
            <Stack.Screen
                name="ProductDetail"
                component={ProductDetailScreen}
                options={
                    (navData: any) => ({
                        title: navData.route.params.productTitle,
                    })
                }
            />
        </Stack.Navigator>
    );
};

export default ProductsNavigator;
