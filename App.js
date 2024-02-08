import React, { useEffect, useState } from 'react'
import { Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'

import MainNavigator from './navigations/MainNavigator'
import IntroScreen from './screens/Intro'
import Layout from './components/Layout'

export default function App() {

    const [alreadyWelcomed, setAlreadyWelcomed] = useState(null)

    const checkAndSetAlreadyWelcomed = async () => {
        try {
            const etatWelcome = await AsyncStorage.getItem('alreadyWelcomed')
            if (etatWelcome === 'true') {
                setAlreadyWelcomed(true)
            }
            else {
                await AsyncStorage.setItem('alreadyWelcomed', 'false')
                setAlreadyWelcomed(false)
            }
        }
        catch (e) {
            console.error(e)
        }
    }

    const checkWelcomed = async () => {
        try {
            await AsyncStorage.setItem('alreadyWelcomed', 'true')
            setAlreadyWelcomed(true)
        }
        catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        const handleDeepLink = (event) => {
            let data = Linking.parse(event.url);
            // Exemple d'utilisation des données de l'URL, par exemple naviguer vers un exposant spécifique
            // Assurez-vous d'avoir un système de navigation en place
            navigateToExposant(data.pathway.id);
        };

        // Écoute pour les liens entrants lorsque l'app est ouverte
        Linking.addEventListener('url', handleDeepLink);

        // Gérer le cas où l'app est lancée à partir d'un lien profond
        Linking.getInitialURL().then((url) => {
            if (url) handleDeepLink({ url });
        });

        return () => {
            Linking.removeEventListener('url', handleDeepLink);
        };
        checkAndSetAlreadyWelcomed()
    }, [])

    return (
        <Layout>
            {!alreadyWelcomed ? (
                <IntroScreen onFinish={() => checkWelcomed()} />
            ) : (
                <NavigationContainer>
                    <MainNavigator />
                </NavigationContainer>
            )}
        </Layout>
    )
}