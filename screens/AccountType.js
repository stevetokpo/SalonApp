import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AccountType = ({ onFinish }) => {
    const handleSelectType = (type) => {
        onFinish(type);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Hello! Choisissez le type du compte
            </Text>
            <Text style={styles.subtitle}>
                Vous pouvez toutefois le changer arpès. Cliquez sur définir plus tard si vous ne voulez pas choisir maintenant.
            </Text>
            <View style={styles.selectionContainer}>
                <TouchableOpacity
                    style={styles.optionButton}
                    onPress={() => handleSelectType(1)} // 1 for Simple Visiteur
                >
                    <Ionicons name="person-outline" size={24} color="#aaa" style={styles.icon} />
                    <Text style={styles.optionText}>Simple Visiteur</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.optionButton}
                    onPress={() => handleSelectType(2)} // 2 for Exposant
                >
                    <Ionicons name="easel-outline" size={24} color="#aaa" style={styles.icon} />
                    <Text style={styles.optionText}>Exposant</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => handleSelectType(0)}>
                <Text style={styles.setupLaterText}>Définir plus tard</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#272927',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        paddingTop: 0,
    },
    title: {
        fontSize: 28,
        fontFamily: 'Ubuntu-Bold',
        color: '#fff',
        marginBottom: 15,
    },
    subtitle: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 32,
        fontFamily: 'Ubuntu-Regular'
    },
    selectionContainer: {
        width: '100%',
        marginBottom: 32,
    },
    optionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#333',
        paddingVertical: 20,
        paddingHorizontal: 16,
        borderRadius: 10,
        marginBottom: 16,
    },
    icon: {
        marginRight: 8,
    },
    optionText: {
        fontSize: 18,
        color: '#fff',
        fontFamily: 'Ubuntu-Regular'
    },
    setupLaterText: {
        fontSize: 16,
        color: '#fff',
        textDecorationLine: 'underline',
        fontFamily: 'Ubuntu-Regular'
    },
});

export default AccountType;
