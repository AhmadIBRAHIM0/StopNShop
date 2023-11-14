import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from "react-redux";
import {RootState} from "../../../App";
import Product from "../../ models/product";
import ProductItem from "../../components/shop/ProductItem";

type Props = {
    navigation: any;
};
const ProductOverviewScreen = (props: Props) => {

    const products: Product[] = useSelector((state: RootState) => state.products.availableProducts);

    return (
        <FlatList
            data={products}
            keyExtractor={(item: Product) => item.id}
            renderItem={
                (itemData: { item: Product }) =>
                    <ProductItem
                        product={itemData.item}
                        onViewDetail={() => {
                            props.navigation.navigate('ProductDetail', {
                                productId: itemData.item.id,
                                productTitle: itemData.item.title,
                            });
                        }}
                    />
            }/>
    );
}

ProductOverviewScreen.navigationOptions = {
    headerTitle: 'All Products',
}

export default ProductOverviewScreen;
