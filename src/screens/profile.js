import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet, Alert } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import Theme from '../styles/Theme';
// import PushNotification from '../components/PushNotifications';
import PushNotification from 'react-native-push-notification';

function Notification({ }) {

    const sendPushNotification = () => {

        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: function (token) {
                alert(token.token)
            },

            // (required) Called when a remote or local notification is opened or received
            onNotification: function (notification) {
                console.log('REMOTE NOTIFICATION ==>', notification)

                // process the notification here
            },
            // Android only: GCM or FCM Sender ID
            senderID: '223462297090',
            popInitialNotification: true,
            requestPermissions: true
        })
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <CustomButton
                style={{
                    width: '90%',
                    borderColor: Theme.WHITE,
                }}
                onPress={() => sendPushNotification()}
                titleStyle={{ color: Theme.WHITE }}
                color1={Theme.TERITIARY_COLOR}
                color2={Theme.SECONDARY_COLOR}
                title=' Show Token ' />
        </View>
    );
}

export default Notification;

const styles = StyleSheet.create({
    image: {
        height: '50%',
        width: '90%'
    }
})