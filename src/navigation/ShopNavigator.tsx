import {createStackNavigator} from '@react-navigation/stack';
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {Platform} from "react-native";
import React from "react";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/UI/HeaderButton";
import CartScreen from "../screens/shop/CartScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import OrdersScreen from "../screens/shop/OrdersScreen";
import Icon from "react-native-vector-icons/FontAwesome";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const defaultNavOptions = {
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
};

const ProductsNavigator = (): React.JSX.Element => {
    return (
        <Stack.Navigator
            screenOptions={defaultNavOptions}
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
                        headerLeft: () => (
                            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                                <Item
                                    title="Menu"
                                    iconName="bars"
                                    onPress={() => navData.navigation.toggleDrawer()}
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

const OrdersNavigator = (): React.JSX.Element => {
    return (
        <Stack.Navigator
            screenOptions={defaultNavOptions}
        >
            <Stack.Screen
                name="OrdersScreen"
                component={OrdersScreen}
                options={
                    (navData: any) => ({
                        title: 'Your Orders',
                        headerLeft: () => (
                            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                                <Item
                                    title="Menu"
                                    iconName="bars"
                                    onPress={() => navData.navigation.toggleDrawer()}
                                />
                            </HeaderButtons>
                        ),
                    })
                }
            />
        </Stack.Navigator>
    );
}

const ShopNavigator = (): React.JSX.Element => {
    return (
        <Drawer.Navigator
        >
            <Drawer.Screen
                name="Products"
                component={ProductsNavigator}
                options={{
                    headerShown: false,
                    drawerIcon: () => (
                        <Icon name="shopping-cart" size={20} color="black"/>
                    ),
                }}
            />
            <Drawer.Screen
                name="Orders"
                component={OrdersNavigator}
                options={{
                    headerShown: false,
                    drawerIcon: () => (
                        <Icon name="list" size={20} color="black"/>
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

export default ShopNavigator;
