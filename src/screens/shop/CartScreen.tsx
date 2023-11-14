import {Button, FlatList, StyleSheet, Text, View} from "react-native";
import {useSelector} from "react-redux";
import {CartState} from "../../providers/CartProvider";
import {Colors} from "react-native/Libraries/NewAppScreen";
import CartItem from "../../components/shop/CartItem";
import {useMemo} from "react";

type CartItemType = {
    productId: string;
    productTitle: string;
    productPrice: number;
    quantity: number;
    sum: number;
}
const CartScreen = (props: any) => {
    const cartState = useSelector((state: CartState) => state.items);
    const cartTotalAmount = useSelector((state: CartState) => state.totalAmount);

    const cartItems = useMemo(() => {
        const transformedCartItems: CartItemType[] = [];
        for (const key in cartState) {
            transformedCartItems.push({
                productId: key,
                productTitle: cartState.items[key].title,
                productPrice: cartState.items[key].price,
                quantity: cartState.items[key].quantity,
                sum: cartState.items[key].sum,
            });
        }

        return transformedCartItems;
    }, [cartState]);

    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>Total: <Text style={styles.amountText}>${cartTotalAmount}</Text></Text>
                <Button title="Order Now" disabled={cartItems.length === 0}/>
            </View>
            <FlatList
                data={cartItems}
                keyExtractor={(item: CartItemType) => item.productId}
                renderItem={itemData => <CartItem
                    quantity={itemData.item.quantity}
                    title={itemData.item.productTitle}
                    amount={itemData.item.sum}
                    onRemove={() => {
                    }}
                />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        margin: 20,
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    summaryText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 18,
    },
    amountText: {
        color: Colors.primary,
    }
});

export default CartScreen;