import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    StatusBar,
    Text,
    Platform,
    Dimensions
} from 'react-native';
import { Icon, icoMoonConfigSet } from '../styles/Icon';
import Theme from '../styles/Theme';

export default function CustomHeader({ navigation }) {

    return (
        <View style={[styles.headerWrapper]}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Icon
                        name={'menu'}
                        color={Theme.TERITIARY_COLOR}
                        size={20}
                        config={icoMoonConfigSet}
                    />
                </TouchableOpacity>

                <View style={{ width: '80%', alignItems: 'center', }}>
                    <Text style={{
                        fontFamily: 'BerkshireSwash-Regular',
                        fontSize: Theme.FONT_TWNETY,
                        color: Theme.TERITIARY_COLOR,
                    }}>Demo App</Text>
                </View>
                <View style={{ width: '20%', }} />
            </View>
        </View >
    )
}








const styles = StyleSheet.create({
    headerWrapper: {
        height: Platform.OS == 'android' ? StatusBar.currentHeight + 20 : 70,
        minHeight: 50,
        alignContent: 'center',
        backgroundColor: Theme.PRIMARY_COLOR
    },
    container: {
        zIndex: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        flexDirection: 'row',
        paddingHorizontal: 10
    }

})
