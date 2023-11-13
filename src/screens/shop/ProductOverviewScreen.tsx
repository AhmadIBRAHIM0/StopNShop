import React from 'react';
import {FlatList, Text} from 'react-native';
import {useSelector} from "react-redux";
import {RootState} from "../../../App";
import Product from "../../ models/product";

type Props = {
    navigation?: any;
};
const ProductOverviewScreen = (props: Props) => {

    const products: Product[] = useSelector((state: RootState) => state.products.availableProducts);
    return (
        <FlatList
            data={products}
            keyExtractor={(item: Product) => item.id}
            renderItem={
                (itemData: { item: Product }) => {
                    return (
                        <Text>{itemData.item.title}</Text>
                    )
                }
            }/>
    );
}

ProductOverviewScreen.navigationOptions = {
    headerTitle: 'All Products',
}

export default ProductOverviewScreen;
