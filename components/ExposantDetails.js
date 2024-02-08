import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { THEME_COLORS } from '../constants/AppInfos';

const UserProfileScreen = () => {
    const [isPressed, setIsPressed] = useState(false);
    const profilImg = require('../assets/images/brands/ag2.png')
    return (
        <View style={styles.container}>
            <Image
                source={profilImg}
                style={styles.profilePic}
            />
            <Text style={styles.name}>COCA COLA</Text>
            <Text style={styles.bio}>Nous sommes @CocaCola l'exposant N°1 du Salon. Trouvez nos contacts sur notre profil.</Text>

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
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        paddingTop: 0,
        backgroundColor: '#272927'
    },
    profilePic: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 10,
    },
    name: {
        fontSize: 30,
        fontFamily: 'Ubuntu-Bold',
        marginTop: 10,
        color: '#fff'
    },
    bio: {
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 20,
        fontFamily: 'Ubuntu-Regular',
        color: '#e0e0e0'
    },
    socialLinks: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
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
    },
    buttonPressed: {
        backgroundColor: THEME_COLORS.c900,
    },
    button_text: {
        color: '#ffffff',
        fontSize: 28,
        fontFamily: 'Ubuntu-Bold',
    }
});

export default UserProfileScreen;