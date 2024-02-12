import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';

import { APP_NAME, THEME_COLORS } from '../constants/AppInfos.js';
import Layout from '../components/Layout.js';

const slides = [
    {
        key: 's0',
        title: APP_NAME,
        text: 'Plongez au cœur de l\'événement! 🕵️‍♂️ Explorez les exposants, découvrez les nouveautés 🆕 et planifiez votre visite 📅 en toute simplicité.',
        image: require('../assets/images/s0.png'),
    },
    {
        key: 's1',
        title: 'VISITE GUIDE',
        text: 'Utilisez notre outil de planification 📝 pour sélectionner vos exposants favoris ❤️, organiser votre agenda 📆 et ne manquer aucun moment fort du salon 🎯.',
        image: require('../assets/images/s1.png'),
    },
    {
        key: 's2',
        title: 'SOYEZ INFORME',
        text: 'Recevez les dernières mises à jour 🔄, les annonces importantes 🔔 et les alertes 🚨 directement sur votre téléphone 📱. Soyez toujours au bon endroit, au bon moment ⏰!',
        image: require('../assets/images/s2.png'),
    },
    {
        key: 's3',
        title: 'PRÊT?',
        text: 'Cliquer sur continuer pour commencer l\'adventure',
        image: require('../assets/images/s3.png'),
        last: true,
    },
];

const Intro = ({ onFinish }) => {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <Layout>
            <Swiper
                style={styles.wrapper}
                showsButtons={false}
                activeDotColor={THEME_COLORS.c400}
                dotColor={THEME_COLORS.c900}
                loop={false}
            >
            {slides.map((slide, index) => (
                <View
                    key={slide.key}
                    style={[styles.slide, styles.background]}
                >
                    <Animatable.Image 
                        animation="bounceIn"
                        delay={500}
                        source={slide.image} 
                        style={styles.image} 
                    />
                    <Animatable.Text 
                        animation="fadeInUp"
                        delay={700}
                        style={styles.header}
                    >
                        {slide.title}
                    </Animatable.Text>
                    <Animatable.Text 
                        animation="fadeInUp"
                        delay={900}
                        style={styles.text}
                    >
                        {slide.text}
                    </Animatable.Text>
                    {slide.last && (
                        <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite">
                            <TouchableOpacity
                                style={[styles.button, isPressed && styles.buttonPressed]}
                                onPress={onFinish}
                                onPressIn={() => setIsPressed(true)}
                                onPressOut={() => setIsPressed(false)}
                            >
                                <Text style={styles.button_text}>Continuer</Text>
                            </TouchableOpacity>
                        </Animatable.View>
                    )}
                </View>
            ))}
            </Swiper>
        </Layout>
    );
};

const styles = StyleSheet.create({
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
    background: {
        backgroundColor: '#272927',
    },
    image: {
        width: '80%',
        height: '50%',
        resizeMode: 'contain',
    },
    header: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 30,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 15,
    },
    button: {
        marginTop: 25,
        backgroundColor: THEME_COLORS.c500,
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
        backgroundColor: THEME_COLORS.c700,
    },
    button_text: {
        color: '#ffffff',
        fontSize: 28,
        fontFamily: 'Ubuntu-Bold',
    }
});

export default Intro;