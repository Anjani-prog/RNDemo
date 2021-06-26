import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/home';
import Profile from '../screens/profile';
import { Icon, icoMoonConfigSet } from '../styles/Icon';
import Theme from '../styles/Theme';
import CustomDrawerContent from '../components/CustomDrawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import Header from '../components/CustomHeader'
import {
    Platform,
    StatusBar,
    AsyncStorage
} from 'react-native';

const Tab = createMaterialBottomTabNavigator();
const BottomTab = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor={Theme.TERITIARY_COLOR}
            inactiveColor={Theme.TERITIARY_COLOR}
            barStyle={{ backgroundColor: Theme.WHITE, }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name={'home3'}
                            color={color}
                            size={20}
                            config={icoMoonConfigSet}
                        />
                    ),
                }} />
            <Tab.Screen
                name="Notification"
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name={'bell'}
                            color={color}
                            size={22}
                            config={icoMoonConfigSet}
                        />
                    ),
                }} />

        </Tab.Navigator>
    )
}

const useInitialRender = () => {
    const [isInitialRender, setIsInitialRender] = React.useState(false);

    if (!isInitialRender) {
        setTimeout(() => setIsInitialRender(true), 10);
        return true;
    }
    return false;
};


const MainStackCreator = createStackNavigator();
function MainSectionStack({ navigation }) {
    return (
        <MainStackCreator.Navigator
            initialRouteName="Home"
            screenOptions={(props) => ({
                header: () => null
            })} >
            <MainStackCreator.Screen name="Home" component={BottomTab}
                options={(props) => ({
                    header: () => <Header {...props} />,
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                })} />

        </MainStackCreator.Navigator>
    )
}

const Drawer = createDrawerNavigator();
function AppStack() {
    const isInitialRender = useInitialRender();

    return (
        <Drawer.Navigator
            openByDefault={false}
            backBehavior='initialRoute'
            drawerContent={props => <CustomDrawerContent {...props} />}
            drawerPosition={'left'}
            drawerStyle={{ width: isInitialRender ? 0 : '80%' }}
        >
            <Drawer.Screen name="Main" component={MainSectionStack} />

        </Drawer.Navigator>
    )
}


const config = {
    animation: 'spring',
    config: {
        stiffness: 100000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};




function MainNavigation() {
    return (
        <>
            <AppStack />
            {Platform.OS === 'android' && <StatusBar style="light" backgroundColor={Theme.TERITIARY_COLOR} animated={true} />}
        </>
    )
}




export default function Routes() {
    return (
        <NavigationContainer>
            <MainNavigation />
        </NavigationContainer>
    )
}