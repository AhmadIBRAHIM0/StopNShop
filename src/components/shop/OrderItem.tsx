import {Button, StyleSheet, Text, View} from "react-native";
import CartItem from "./CartItem";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {useState} from "react";

type OrderItemProps = {
    amount: number;
    date: string;
    items: any;
}
const OrderItem = (props: OrderItemProps) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <View style={styles.orderItem}>
            <View style={styles.summary}>
                <Text style={styles.totalAmount}>
                    ${props.amount.toFixed(2)}
                </Text>
                <Text style={styles.date}>
                    {props.date}
                </Text>
            </View>
            <Button
                color={Colors.primary}
                title={showDetails ? 'Hide Details' : 'Show Details'}
                onPress={() => {
                    setShowDetails(prevState => !prevState);
                }}
            />
            {showDetails && (
                <View style={styles.detailItems}>
                    {props.items.map((cartItem: any) => (
                        <CartItem
                            key={cartItem.productId}
                            quantity={cartItem.quantity}
                            amount={cartItem.sum}
                            title={cartItem.productTitle}
                            onRemove={() => {}}
                        />
                    ))}
                </View>
            )}
        </View>
    )
}

export default OrderItem;

const styles = StyleSheet.create({
    orderItem: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 8,
        elevation: 5, // for android
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 20,
        padding: 10,
        alignItems: 'center'
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    totalAmount: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 16
    },
    date: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 16,
        color: '#888'
    },
    detailItems: {
        width: '100%'
    }
});