import React from "react";
import {FlatList, StyleSheet} from "react-native";
import {RootState} from "../../../App";
import {useSelector} from "react-redux";
import OrderItem from "../../components/shop/OrderItem";

const OrdersScreen = (props: any) => {
    const orders = useSelector((state: RootState) => state.orders.orders);
    return (
        <FlatList
            data={orders}
            keyExtractor={(item: any) => item.id}
            renderItem={(orders: any) =>
                <OrderItem
                    amount={orders.item.amount}
                    date={orders.item.readableDate}
                    items={orders.item.items}
                />}
        />
    );
};

export default OrdersScreen;

const styles = StyleSheet.create({});
