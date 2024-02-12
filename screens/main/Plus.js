import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { THEME_COLORS } from '../../constants/AppInfos';

const Plus = () => {
    const items = [
        { label: 'Mon Compte', icon: 'person-outline', color: '#00C4B4' },
        { label: 'Plan interactif', icon: 'map-outline', color: '#FF6B6B' },
        { label: 'Type du compte', icon: 'layers-outline', color: '#FFD93D' },
        { label: 'Détails de l\'app', icon: 'information-circle-outline', color: '#6BCB77' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>PLUS D'OPTION</Text>
            <View style={styles.container2}>
                {items.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.itemContainer}>
                        <Icon name={item.icon} size={24} color={item.color} style={styles.icon} />
                        <Text style={styles.text}>{item.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME_COLORS.c950,
        textAlign: 'center'
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 27,
        marginLeft: 10,
        marginBottom: 20,
        color: '#ffffff',
        fontFamily: 'Ubuntu-Bold',
        marginTop: 20,
        textAlign: 'center'
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
        backgroundColor: '#333',
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 20,
        width: '90%',
    },
    icon: {
        marginRight: 10,
    },
    text: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Ubuntu-Regular'
    },
});

export default Plus;