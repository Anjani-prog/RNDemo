import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
    StyleSheet
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Routes from '../routes/routes';
import Theme from '../styles/Theme';

export default class SplashSceen extends Component {
    constructor(props) {
        super();
        this.state = { invisible: true }
    }


    hideSplashScreen = () => {
        this.setState({
            invisible: false
        })
    }

    componentDidMount() {
        setTimeout(() => {
            this.hideSplashScreen();
        }, 1000);
    }
    render() {
        if (this.state.invisible) {
            return (
                <SafeAreaView style={styles.container} >
                    <View style={styles.logoContainer}>
                        <Text style={styles.text1}>Demo App</Text>
                    </View>
                </SafeAreaView >
            );
        } else {
            return (
                <Routes />
            )
        }

    }

}

const styles = StyleSheet.create({

    logoContainer: {
        height: '100%',
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    text1: {
        textAlign: 'center',
        fontSize: 50,
        fontFamily: 'BerkshireSwash-Regular',
        color: Theme.TERITIARY_COLOR
    }

})