import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import Theme from '../styles/Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
import {
    widthPercentageToDP,
    heightPercentageToDP,
} from 'react-native-responsive-screen';
function Home({ }) {

    const [image, setimage] = useState('');



    const _takePhoto = async () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(async image => {
            setimage({
                uri: image.path,
                width: image.width,
                height: image.height,
                mime: image.mime,
            });
            setPickerVisible(false)
        })
            .catch((e) => {
                console.log(e);
            });



    }

    const _pickImage = async () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(async image => {
            setimage({
                uri: image.path,
                width: image.width,
                height: image.height,
                mime: image.mime,
            });
            setPickerVisible(false)
        })
            .catch((e) => {
                console.log(e);
            });

    };

    const [PickerVisible, setPickerVisible] = useState(false);


    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Image
                style={styles.image}
                source={Boolean(image) ? { uri: image?.uri } : require('../assets/images/download.png')}
            />
            <CustomButton
                style={{
                    width: '90%',
                    borderColor: Theme.WHITE,
                }}
                onPress={() => setPickerVisible(true)}
                titleStyle={{ color: Theme.WHITE }}
                color1={Theme.TERITIARY_COLOR}
                color2={Theme.SECONDARY_COLOR}
                title=' Upload Image ' />
            <Modal isVisible={PickerVisible}
                onBackdropPress={() => setPickerVisible(false)}
                backdropOpacity={0.5}
                backdropTransitionOutTiming={0}
                animationOut='fadeOut'
                animationOutTiming={500}
                animationInTiming={500}
                animationIn='fadeIn'>
                <View style={styles.modalStyle}>
                    <Text style={styles.text1}>Select Image</Text>
                    <TouchableOpacity onPress={() => _takePhoto()}>
                        <Text style={styles.text2}>Take Photo.....</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => _pickImage()}>
                        <Text style={styles.text2}>Choose from Library...</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={{ alignSelf: 'flex-end', }}>
                    <Text style={styles.text3}>Cancel</Text>
                </TouchableOpacity> */}
                </View>
            </Modal>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    image: {
        height: '50%',
        width: '90%'
    },
    modalStyle: {
        backgroundColor: '#fff',
        height: '25%',
        width: '80%',
        alignSelf: 'center',
        padding: heightPercentageToDP(2)
    },
    text1: {
        fontSize: Theme.FONT_SEVENTEEN,
        fontFamily: 'Roboto-Bold',
        // color: Theme.BLUE,
        paddingBottom: heightPercentageToDP(2)
    },
    text2: {
        fontSize: Theme.FONT_SIZE_MEDIUM,
        fontFamily: 'Roboto-Light',
        paddingBottom: heightPercentageToDP(2)
    },
    text3: {
        fontSize: Theme.FONT_FIFTEEN,
        fontFamily: 'Roboto-Medium',
        paddingBottom: heightPercentageToDP(2)
    }

})