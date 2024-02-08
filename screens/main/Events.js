import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { THEME_COLORS } from '../../constants/AppInfos'

const events = [
    { id: 1, day: 25, month: 'JAN', title: 'Art Exhibition', location: 'Convention Center, The Hague' },
    { id: 2, day: 18, month: 'JAN', title: 'Tech Meetup', location: 'Museum, Utrecht' },
    { id: 3, day: 10, month: 'JAN', title: 'Lecture Series', location: 'Cafe, Rotterdam' },
    { id: 4, day: 13, month: 'JAN', title: 'Workshop', location: 'Community Center, Rotterdam' },
    { id: 5, day: 15, month: 'JAN', title: 'Art Exhibition', location: 'Hotel Ballroom, Rotterdam' },
    { id: 6, day: 25, month: 'JAN', title: 'Charity Gala', location: 'Art Gallery, Utrecht' },
    { id: 7, day: 8, month: 'JAN', title: 'Music Concert', location: 'Cafe, Amsterdam' },
    { id: 8, day: 25, month: 'JAN', title: 'Workshop', location: 'Local Library, Utrecht' },
    { id: 9, day: 13, month: 'JAN', title: 'Book Club', location: 'Cafe, Utrecht' },
    { id: 10, day: 13, month: 'JAN', title: 'Tech Meetup', location: 'Local Library, Utrecht' },
];


const EventItem = ({ day, month, title, location }) => (
    <TouchableOpacity style={styles.eventItem}>
        <View style={styles.dateContainer}>
            <Text style={[styles.day, styles.fontFam]}>{day}</Text>
            <Text style={[styles.month, styles.fontFam]}>{month}</Text>
        </View>
        <View style={styles.details}>
            <Text style={styles.title}>{title}</Text>
            <Text style={[styles.location, styles.fontFam]}>{location}</Text>
        </View>
        <View style={styles.seeMore}>
            <Icon name="chevron-forward-outline" size={24} color="#fff" />
        </View>
    </TouchableOpacity>
);

const EventList = () => (
    <View style={styles.container}>
        <Text style={styles.header}>EVENEMENTS A VENIR</Text>
        <ScrollView>
            {events.map(event => (
                <EventItem key={event.id} {...event} />
            ))}
        </ScrollView>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#272927',
        padding: 10,
        paddingTop: 20,
    },
    header: {
        color: '#fff',
        fontSize: 24,
        marginBottom: 20,
        fontFamily: 'Ubuntu-Bold'
    },
    eventItem: {
        flexDirection: 'row',
        backgroundColor: '#333',
        marginBottom: 15,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        borderLeftColor: THEME_COLORS.c400,
        borderLeftWidth: 4,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },
    dateContainer: {
        padding: 15,
        backgroundColor: '#444',
        justifyContent: 'center',
        alignItems: 'center',
    },
    day: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    month: {
        color: '#fff',
        fontSize: 16,
    },
    details: {
        padding: 15,
        justifyContent: 'center',
        flex: 1,
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Ubuntu-Bold'
    },
    location: {
        color: '#aaa',
    },
    fontFam: {
        fontFamily: 'Ubuntu-Regular'
    },
    seeMore: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
});

export default EventList;