import React from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../App";
import Product from "../../ models/product";
import ProductItem from "../../components/shop/ProductItem";
import {addToCart} from "../../providers/CartProvider";

type Props = {
    navigation: any;
};
const ProductOverviewScreen = (props: Props) => {

    const products: Product[] = useSelector((state: RootState) => state.products.availableProducts);
    const dispatch = useDispatch();

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
                        onAddToCart={() => {
                            const product: Product = itemData.item;
                            dispatch(addToCart(product));
                        }}
                    />
            }/>
    );
}

ProductOverviewScreen.navigationOptions = (navData: any) => {
    return {
        headerTitle: 'All Products',
        headerRight: () => (
            navData.navigation.navigate('Cart')
        )
    }
}

export default ProductOverviewScreen;
