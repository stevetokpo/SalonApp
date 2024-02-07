import React, { useState, useRef } from 'react';
import { StyleSheet, View, FlatList, Dimensions, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Video } from 'expo-av';

import { THEME_COLORS } from '../../constants/AppInfos.js'

const data = [
    {
        'id': '1',
        'video': require('../../assets/videos/pre1.mp4'),
        'author': 'Agence 1'
    },
    {
        'id': '2',
        'video': require('../../assets/videos/pre2.mp4'),
        'author': 'Agence 2'
    },
    {
        'id': '3',
        'video': require('../../assets/videos/pre3.mp4'),
        'author': 'Agence 3'
    },
];

const { width, height } = Dimensions.get('window');
const NAVIGATION_BAR_HEIGHT = 40;
const videoHeight = height - NAVIGATION_BAR_HEIGHT;

const HomeScreen = ({ navigation }) => {
    const openDetails = (item) => {
        if (item) {
            navigation.navigate('ExposantDetails', { imageItem: item });
        }
    };
    const [viewableItems, setViewableItems] = useState([]);
    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });
    const onViewRef = useRef(({ viewableItems }) => {
        setViewableItems(viewableItems.map(item => item.key));
    });

    const isViewable = item => viewableItems.includes(item.id);

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={[styles.videoContainer, {height: videoHeight}]}>
                        <Video
                            source={item.video}
                            rate={1.0}
                            volume={1.0}
                            isMuted={false}
                            resizeMode="cover"
                            shouldPlay={isViewable(item)}
                            isLooping
                            style={[styles.video, {height: videoHeight}]}
                            useNativeControls={false}
                        />
                        <TouchableOpacity style={styles.textContainer} onPress={() => openDetails(item)}>
                            <View style={styles.authorRow}>
                                <Text style={styles.author}>{item.author}</Text>
                                <Icon name="person-circle-outline" size={24} color="#FFF" style={styles.icon} />
                            </View>
                            <Text style={styles.bio}>Cliquez pour voir le profil</Text>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item) => item.id}
                pagingEnabled
                horizontal={false}
                showsVerticalScrollIndicator={false}
                snapToInterval={videoHeight + NAVIGATION_BAR_HEIGHT}
                snapToAlignment={"start"}
                decelerationRate={"fast"}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    videoContainer: {
        width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    video: {
        width,
    },
    textContainer: {
        position: 'absolute',
        bottom: 40,
        left: 20,
        right: 20, // Ajout pour s'assurer que le conteneur ne dépasse pas l'écran sur la droite
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 10,
        flexDirection: 'column', // Change la disposition pour aligner les enfants verticalement
        alignItems: 'flex-start', // Alignement à gauche des éléments enfants
    },
    authorRow: {
        flexDirection: 'row', // Maintient l'icône et le nom de l'auteur sur la même ligne
        alignItems: 'center',
        flexWrap: 'wrap', // Permet aux éléments de passer à la ligne si nécessaire
        maxWidth: '100%', // Empêche le débordement hors du conteneur parent
    },
    author: {
        color: '#FFF',
        fontFamily: 'Ubuntu-Bold',
        fontSize: 18, // Ajusté pour l'exemple, ajustez selon vos besoins
        marginRight: 10,
    },
    bio: {
        color: '#FFF',
        fontSize: 14,
        fontFamily: 'Ubuntu-Regular',
        // Assure que le texte de la bio s'affiche sur des lignes multiples si nécessaire
        flexShrink: 1, // Permet au texte de rétrécir et de passer à la ligne
    },
    icon: {
        color: THEME_COLORS.c600,
    },
});

export default HomeScreen;
