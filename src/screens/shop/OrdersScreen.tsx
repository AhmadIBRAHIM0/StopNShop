import React from "react";
import {FlatList, StyleSheet, Text} from "react-native";
import {RootState} from "../../../App";
import {useSelector} from "react-redux";

const OrdersScreen = (props: any) => {
    const orders = useSelector((state: RootState) => state.orders.orders);
  return (
    <FlatList
      data={orders}
      keyExtractor={(item: any) => item.id}
      renderItem={(itemData: any) => <Text>{itemData.item.totalAmount}</Text>}
    />
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({});
