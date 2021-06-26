import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Theme from '../styles/Theme';

import {
    widthPercentageToDP,
    heightPercentageToDP,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import { Icon, icoMoonConfigSet } from '../styles/Icon';

// use CustomButton
//  <CustomButton    borderColor={}  onPress={}  title={} />

function InputIcon(name) {
    return (
        <Icon
            name={name}
            color={Theme.PRIMARY_COLOR}
            size={14}
            config={icoMoonConfigSet}
        />
    )
}


export const CustomButton = (props) => {
    const { borderColor,
        onPress,
        title,
        style,
        disabled,
        icon,
        loading,
        color1,
        color2,
        titleStyle } = props;
    return (
        <TouchableOpacity
            style={[styles.largeButtonContainer, style,
            disabled && { borderColor: Theme.GRAY_OPACITY }
            ]}
            onPress={onPress}
            activeOpacity={0.5}
            disabled={disabled}
        >
            <LinearGradient
                start={{ x: 1, y: 0 }} //here we are defined x as start position
                end={{ x: 0, y: 0 }} //here we can define axis but as end position
                colors={[color1, color2]}
                style={styles.linearGradient}>
                {Boolean(icon) && InputIcon(icon)}
                <Text style={[styles.largeButtonText, titleStyle,
                disabled && { color: Theme.GRAY_OPACITY }
                ]}>{title}</Text>
            </LinearGradient>


        </TouchableOpacity>
    )
}




const styles = StyleSheet.create({
    largeButtonContainer: {
        backgroundColor: Theme.WHITE,
        borderWidth: 2,
        height: heightPercentageToDP(6),
        borderRadius: 10,
        justifyContent: 'center',
        marginTop: '3%'
        // alignItems: 'center',
        // alignSelf: 'center',

    },
    largeButtonText: {
        fontSize: Theme.FONT_SIZE_LARGE,
        color: '#4B4B4B',
        textAlign: "center",
        justifyContent: 'center',
        fontFamily: "Roboto-Bold",
        paddingHorizontal: 5
    },
    linearGradient: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row'
    }

});