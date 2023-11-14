import {createStackNavigator} from '@react-navigation/stack';
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {Platform} from "react-native";
import React from "react";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/UI/HeaderButton";
import Icon from "react-native-vector-icons/FontAwesome";
import CartScreen from "../screens/shop/CartScreen";

const Stack = createStackNavigator();

const ProductsNavigator = (): React.JSX.Element => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
                headerTitleStyle: {
                    fontFamily: 'OpenSans-Bold',
                },
                headerBackTitleStyle: {
                    fontFamily: 'OpenSans-Regular',
                },
            }}
        >
            <Stack.Screen
                name="ProductsOverview"
                component={ProductOverviewScreen}
                options={
                    (navData: any) => ({
                        title: 'All Products',
                        headerRight: () => (
                            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                                <Item
                                    title="Cart"
                                    iconName="shopping-cart"
                                    onPress={() => navData.navigation.navigate('Cart')}
                                />
                            </HeaderButtons>
                        ),
                    })
                }
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
            <Stack.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    title: 'Cart',
                }}
            />
        </Stack.Navigator>
    );
};

export default ProductsNavigator;
