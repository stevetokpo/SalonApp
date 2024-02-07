import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Layout from '../../components/Layout';

const Plus = () => {
    return (
        <Layout>
            <View style={styles.container}>
                <Text style={styles.title}>CALENDRIER EVENTS</Text>
            </View>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 40
    },
    title: {
        fontSize: 30,
        marginLeft: 10,
        marginBottom: 20,
        color: '#ffffff',
        fontFamily: 'Montserrat-Bold',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    box: {
        backgroundColor: '#FF9716',
        padding: 15,
        borderRadius: 10,
        flex: 1,
        marginHorizontal: 5,
        marginBottom: 10
    },
    boxText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular'
    },
});

export default Plus;