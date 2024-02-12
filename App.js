import React, { useEffect, useState } from 'react';
import { Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './navigations/MainNavigator';
import IntroScreen from './screens/Intro';
import AccountTypeScreen from './screens/AccountType'
import Layout from './components/Layout';

export default function App() {
    const [alreadyWelcomed, setAlreadyWelcomed] = useState(false);
    const [accountType, setAccountType] = useState(null);

    const checkAndSetAlreadyWelcomed = async () => {
        try {
            const etatWelcome = await AsyncStorage.getItem('alreadyWelcomed');
            setAlreadyWelcomed(etatWelcome === 'true');
        } catch (e) {
            console.error(e);
        }
    };

    const checkWelcomed = async () => {
        try {
            await AsyncStorage.setItem('alreadyWelcomed', 'true');
            setAlreadyWelcomed(true);
        } catch (e) {
            console.error(e);
        }
    };

    const checkAndSetAccountType = async () => {
        try {
            const etatAccount = await AsyncStorage.getItem('accountType');
            setAccountType(etatAccount);
        } catch (e) {
            console.error(e);
        }
    };

    const checkAccountType = async (val) => {
        try {
            await AsyncStorage.setItem('accountType', val.toString());
            setAccountType(val);
        } catch (e) {
            console.error(e);
        }
    };

    const navigateToExposant = (id) => {
        console.log(id);
    };

    useEffect(() => {
        checkAndSetAlreadyWelcomed();
        checkAndSetAccountType();
    }, []);    

    const renderContent = () => {
        if (!alreadyWelcomed) {
            return <IntroScreen onFinish={checkWelcomed} />;
        }
        if (accountType === null) {
            return <AccountTypeScreen onFinish={(val) => checkAccountType(val)} />;
        }
        return (
            <NavigationContainer>
                <MainNavigator />
            </NavigationContainer>
        );
    };

    return <Layout>{renderContent()}</Layout>;
}