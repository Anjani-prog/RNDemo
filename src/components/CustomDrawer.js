
import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {
    View,
    Button,
    StyleSheet,
    Text,
    AsyncStorage,
    Image,
    TouchableOpacity
} from 'react-native';

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
    useIsDrawerOpen
} from '@react-navigation/drawer';


import { Icon, icoMoonConfigSet } from '../styles/Icon';
import Theme from '../styles/Theme';

import {
    widthPercentageToDP,
    heightPercentageToDP,
} from 'react-native-responsive-screen';
// import { baseURL } from '../routes/APICalls';
export default function CustomDrawerContent(props) {


    const stackArray = [
        {
            label: ' Home ',
            icon: 'home31',
            stack: 'Home',
        },
        {
            label: ' Screen 1 ',
            icon: 'visa_icon',
            stack: 'Home',
        },
        {
            label: ' Screen 2 ',
            icon: 'visa_icon',
            stack: 'Home',
        },
        {
            label: ' Screen 3 ',
            icon: 'visa_icon',
            stack: 'Home',
        },
        {
            label: ' Screen 4 ',
            icon: 'visa_icon',
            stack: 'settings',
        },
        {
            label: ' Screen 5 ',
            icon: 'visa_icon',
            stack: 'TermsAndConditions',
            screen: 'TermsAndConditions',
        },
        {
            label: ' Logout ',
            icon: 'exit1',
            function: 'signOut',
        },
    ]

    return (
        <DrawerContentScrollView {...props}>

            <View style={{ height: 50, width: '100%', paddingVertical: '5%' }}>

            </View>

            <View style={[styles.drawerWrapper]}>
                {
                    stackArray.map((item, index) => {
                        if (!(Boolean(item.function))) {
                            return (
                                <DrawerItem
                                    icon={({ focused, color, size }) => (
                                        <Icon
                                            name={item.icon}
                                            size={20}
                                            config={icoMoonConfigSet}
                                            style={[styles.drawerIcon, { color: Theme.TERITIARY_COLOR }]}
                                        />
                                    )}
                                    label={({ focused, color }) =>
                                        <Text style={[styles.drawerLabel, { color: Theme.TERITIARY_COLOR }]}>{item.label}</Text>
                                    }
                                    // onPress={() =>
                                    //     props.navigation.navigate(item.stack,
                                    //         item.screen && {
                                    //             screen: item.screen,
                                    //             params: {
                                    //                 statusBarIdenti: item.params ? item.params : ''
                                    //             }
                                    //         }
                                    //     )
                                    // }

                                    style={[styles.drawerItem, {}]}
                                    // focused={activeItem == item.stack ? true : false}
                                    key={index}
                                />
                            )
                        } else {
                            return (
                                <DrawerItem
                                    icon={({ focused, color, size }) => (
                                        <Icon
                                            name={item.icon}
                                            size={20}
                                            config={icoMoonConfigSet}
                                            style={[styles.drawerIcon, { color: Theme.TERITIARY_COLOR }]}
                                        />
                                    )}
                                    label={({ focused, color }) =>
                                        <Text style={[styles.drawerLabel, { color: Theme.TERITIARY_COLOR }]}>{item.label}</Text>
                                    }
                                    // onPress={() =>
                                    //     item.function ? LogOut() : null
                                    // }

                                    style={[styles.drawerItem, {}]}
                                    // focused={activeItem == item.stack ? true : false}
                                    key={index}
                                />
                            )
                        }
                    })

                }
            </View>
        </DrawerContentScrollView>
    );
}



const styles = StyleSheet.create({
    drawerIcon: {
        color: '#374045'
    },
    drawerItem: {
        padding: widthPercentageToDP(.5),
        borderBottomWidth: .5,
        borderColor: Theme.SECONDARY_COLOR,
        backgroundColor: '#fff'
    },
    drawerLabel: {
        fontFamily: 'Roboto-Regular',
        fontSize: Theme.FONT_SIZE_MEDIUM,
        color: '#374045',
        left: widthPercentageToDP(-2)
    },
    drawerWrapper: {
        // backgroundColor: 'red'
    },
    profileWrap: {
        minHeight: Theme.SCREEN_HEIGHT / 4.3,
        backgroundColor: '#F5F5F5',
        marginBottom: '5%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: heightPercentageToDP(8.5),
        width: heightPercentageToDP(8.5),
        borderRadius: heightPercentageToDP(4.25),
        borderWidth: 2,
        borderColor: Theme.GREEN,
        resizeMode: 'cover',
    },
    text1: {
        fontFamily: "Roboto-Bold",
        fontSize: Theme.FONT_SIZE_20,
        color: "#2D98F9",
        marginBottom: heightPercentageToDP(.5)
    },
    text2: {
        fontFamily: "Roboto-Regular",
        fontSize: Theme.FONT_SIZE_SMALL,
        color: "#374045",
    },
});