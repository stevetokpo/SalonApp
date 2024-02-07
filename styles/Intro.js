import { StyleSheet } from 'react-native'
import { THEME_COLORS } from '../constants/AppInfos.js'

export default StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 39,
        marginBottom: 20,
        color: THEME_COLORS.c600,
        fontFamily: 'Ubuntu-Bold',
    },
    title2: {
        fontSize: 45,
        marginBottom: 20,
        color: THEME_COLORS.c600,
        fontFamily: 'RubikGlitchPop-Regular',
    },
    description: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
        color: '#ffffff',
        fontFamily: 'Ubuntu-Regular',
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
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