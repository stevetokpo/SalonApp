import React, { useEffect, useState } from 'react'
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
        checkAndSetAlreadyWelcomed()
    }, [])

    return (
        <Layout>
            {!alreadyWelcomed ? (
                <IntroScreen onFinish={() => checkWelcomed()} />
            ) :  (
                <NavigationContainer>
                    <MainNavigator />
                </NavigationContainer>
            )}
        </Layout>
    )
}