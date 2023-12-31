import {Button, Image, Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View} from "react-native";
import React from "react";
import Product from "../../ models/product";
import {Colors} from "react-native/Libraries/NewAppScreen";

type Props = {
    product: Product;
    onViewDetail: () => void;
    onAddToCart: () => void;
}
const ProductItem = ({product, onViewDetail, onAddToCart}: Props): React.JSX.Element => {

    let TouchableComponent: TouchableOpacity | TouchableNativeFeedback = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.product}>
            <View style={styles.touchable}>
                <TouchableComponent onPress={onViewDetail} useForeground>
                    <View>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{uri: product.imageUrl}}/>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.title}>{product.title}</Text>
                            <Text style={styles.price}>${product.price.toFixed(2)}</Text>
                        </View>
                        <View style={styles.actions}>
                            <Button
                                title="View Details"
                                onPress={onViewDetail}
                                color={Colors.primary}
                            />
                            <Button
                                title="To Cart"
                                onPress={onAddToCart}
                                color={Colors.primary}
                            />
                        </View>
                    </View>
                </TouchableComponent>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
    },
    details: {
        alignItems: 'center',
        height: '15%'
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
    },
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20,
    },
    touchable: {
        borderRadius: 10,
        overflow: 'hidden',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25%',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 18,
        marginVertical: 2,
        fontFamily: 'OpenSans-Bold',
    },
    price: {
        fontSize: 14,
        color: '#888',
        fontFamily: 'OpenSans-Regular',
    }
})

export default ProductItem;