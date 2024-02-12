import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'

import Layout from '../components/Layout'
import styles from '../styles/Intro.js'
import { APP_NAME, THEME_COLORS } from '../constants/AppInfos.js'

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
                <View style={styles.slide}>
                    <Text style={[styles.title, styles.title2]}>
                        {APP_NAME}
                    </Text>
                    <Image source={require('../assets/images/anime.gif')} style={styles.image} />
                    <Text style={styles.description}>
                        Plongez au cœur de l'événement! 🕵️‍♂️ Explorez les exposants, découvrez les nouveautés 🆕 et planifiez votre visite 📅 en toute simplicité.
                    </Text>
                </View>

                <View style={styles.slide}>
                    <Text style={styles.title}>
                        VISITE GUIDE
                    </Text>
                    <Image source={require('../assets/images/anime.gif')} style={styles.image} />
                    <Text style={styles.description}>
                        Utilisez notre outil de planification 📝 pour sélectionner vos exposants favoris ❤️, organiser votre agenda 📆 et ne manquer aucun moment fort du salon 🎯.
                    </Text>
                </View>

                <View style={styles.slide}>
                    <Text style={styles.title}>
                        SOYEZ INFORME
                    </Text>
                    <Image source={require('../assets/images/anime.gif')} style={styles.image} />
                    <Text style={styles.description}>
                        Recevez les dernières mises à jour 🔄, les annonces importantes 🔔 et les alertes 🚨 directement sur votre téléphone 📱. Soyez toujours au bon endroit, au bon moment ⏰!
                    </Text>
                    <TouchableOpacity
                        style={[styles.button, isPressed && styles.buttonPressed]}
                        onPress={onFinish}
                        onPressIn={() => setIsPressed(true)}
                        onPressOut={() => setIsPressed(false)}
                    >
                        <Text style={styles.button_text}>Commencer</Text>
                    </TouchableOpacity>
                </View>
            </Swiper>
        </Layout>
    );
};

export default Intro;