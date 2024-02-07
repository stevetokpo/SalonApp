import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { ColorfulTabBar } from 'react-navigation-tabbar-collection';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/main/Home';
import ExposantsScreen from '../screens/main/Exposants';
import EventsScreen from '../screens/main/Events';
import PlusScreen from '../screens/main/Plus';

import ExposantDetails from '../components/ExposantDetails';

import { THEME_COLORS } from '../constants/AppInfos'

const HomeStack = createStackNavigator();

function HomeStackNavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="HomeStack"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name="ExposantDetails"
                component={ExposantDetails}
                options={{
                    headerStyle: {
                        backgroundColor: '#00061E',
                    },
                    headerTintColor: '#ffffff',
                    headerTitleStyle: {
                        color: '#ffffff',
                    },
                }}
            />
        </HomeStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

const StackNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBar={(props) => <ColorfulTabBar {...props} darkMode={'dark'} />}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'heart' : 'heart-outline';
                    }
                    else if (route.name === 'Exposants') {
                        iconName = focused ? 'person' : 'person-outline';
                    }
                    else if (route.name === 'Events') {
                        iconName = focused ? 'calendar' : 'calendar-outline';
                    }
                    else if (route.name === 'Plus') {
                        iconName = focused ? 'add-circle' : 'add-circle-outline';
                    }
                    
                    return <Icon name={iconName} size={size} color={THEME_COLORS.c400} />;
                },
                tabBarActiveTintColor: '#494949',
                tabBarInactiveTintColor: '#888888',
            })}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeStackNavigator} 
                options={{
                    title: 'Accueil'
                }}
            />
            <Tab.Screen 
                name="Exposants" 
                component={ExposantsScreen} 
                options={{
                    title: 'Exposants'
                }}
            />
            <Tab.Screen 
                name="Events" 
                component={EventsScreen} 
                options={{
                    title: 'Evènements'
                }}
            />
            <Tab.Screen 
                name="Plus" 
                component={PlusScreen} 
                options={{
                    title: 'Plus'
                }}
            />
        </Tab.Navigator>
    );
};

export default StackNavigator;