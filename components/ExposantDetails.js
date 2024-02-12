import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { THEME_COLORS } from '../constants/AppInfos';

export default function ExposantDetails() {
    const [isPressed, setIsPressed] = useState(false);
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/cover.png')} style={styles.coverImage} />
            <View style={styles.profileContainer}>
                <Image source={require('../assets/images/brands/ag2.png')} style={styles.profileImage} />
                <Text style={styles.name}>Mart Biemans</Text>
                <Text style={styles.location}>Netherlands</Text>
                <View style={styles.socialLinks}>
                    <TouchableOpacity style={styles.iconButton}>
                        <Icon name="logo-facebook" size={30} color="#3b5998" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <Icon name="logo-linkedin" size={30} color="#0e76a8" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <Icon name="mail-outline" size={30} color="#f05454" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <Icon name="logo-twitter" size={30} color="#00acee" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={[styles.button, isPressed && styles.buttonPressed]}
                    onPress={console.log('ok')}
                    onPressIn={() => setIsPressed(true)}
                    onPressOut={() => setIsPressed(false)}
                >
                    <Text style={styles.button_text}>PARTAGER LE PROFIL</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#272927'
    },
    coverImage: {
        width: '100%',
        height: 150,
    },
    profileContainer: {
        alignItems: 'center',
        marginTop: -50,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 3,
        borderColor: 'white',
    },
    name: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 30,
        marginTop: 8,
        color: '#fefefe'
    },
    location: {
        fontSize: 14,
        fontFamily: 'Ubuntu-Regular',
        color: '#a0a0a0'
    },
    socialLinks: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        marginTop: 10
    },
    iconButton: {
        backgroundColor: '#333',
        borderRadius: 10,
        padding: 10,
        margin: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    button: {
        backgroundColor: THEME_COLORS.c700,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '95%',
        marginTop: 10,
    },
    buttonPressed: {
        backgroundColor: THEME_COLORS.c900,
    },
    button_text: {
        color: '#ffffff',
        fontSize: 14,
        fontFamily: 'Ubuntu-Bold',
    }
});
