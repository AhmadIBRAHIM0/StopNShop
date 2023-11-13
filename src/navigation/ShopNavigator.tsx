import {createStackNavigator} from '@react-navigation/stack';
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
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
                    title: 'Products Overview'
            }}
            />
        </Stack.Navigator>
    );
};

export default ProductsNavigator;
