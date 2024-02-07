import React, { useState, useEffect } from 'react'
import { View, StatusBar } from 'react-native'
import * as Font from 'expo-font'

import styles from '../styles/Global.js'

const Layout = ({ children }) => {
    const [fontLoaded, setFontLoaded] = useState(false)

    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync({
                'Ubuntu-Bold': require('../assets/fonts/Ubuntu-Bold.ttf'),
                'Ubuntu-Italic': require('../assets/fonts/Ubuntu-Italic.ttf'),
                'Ubuntu-Regular': require('../assets/fonts/Ubuntu-Regular.ttf'),
                'Ubuntu-Medium': require('../assets/fonts/Ubuntu-Medium.ttf'),
                'RubikGlitchPop-Regular': require('../assets/fonts/RubikGlitchPop-Regular.ttf'),
                'Montserrat-Regular': require('../assets/fonts/Ubuntu-Regular.ttf'),
                'Montserrat-Bold': require('../assets/fonts/Ubuntu-Bold.ttf'),
            })
            setFontLoaded(true)
        }

        loadFonts()
    }, [])

    if (!fontLoaded) {
        return null
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#272927" />
            {children}
        </View>
    )
}

export default Layout