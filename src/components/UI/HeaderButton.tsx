import React from "react";
import {HeaderButton} from "react-navigation-header-buttons";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Platform} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";

const CustomHeaderButton = (props: any) => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Icon}
            iconSize={23}
            color={
                Platform.OS === 'android' ? 'white' : Colors.primary
            }
        />
    )
}

export default CustomHeaderButton;