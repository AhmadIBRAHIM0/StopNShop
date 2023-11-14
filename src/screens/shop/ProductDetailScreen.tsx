import React from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../App";
import Product from "../../ models/product";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {addToCart} from "../../providers/CartProvider";

type Props = {
    navigation: any;
    route: any;
};

const ProductDetailScreen = (props: Props) => {
    const {productId} = props.route.params;
    const selectedProduct: Product = useSelector((state: RootState) =>
        state.products.availableProducts.find(
            (product: Product) => product.id === productId)
    );
    const dispatch = useDispatch();
    return (
        <ScrollView>
            <Image style={styles.image} source={{uri: selectedProduct.imageUrl}}/>
            <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>
            <View style={styles.actions}>
                <Button color={Colors.primary} title="Add to Cart" onPress={() => {
                    dispatch(addToCart(selectedProduct));
                }}/>
            </View>
        </ScrollView>
    );
}


ProductDetailScreen.navigationOptions = (navData: any) => {
    return {
        headerTitle: navData.route.params.productTitle,
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20,
        fontFamily: 'OpenSans-Bold',
    },
    description: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20,
    },
    actions: {
        marginVertical: 10,
        alignItems: 'center',
    }
});

export default ProductDetailScreen;