import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { THEME_COLORS } from '../../constants/AppInfos';
const { width } = Dimensions.get('window');

const categories = [
    { id: 1, name: 'Informatique', color: '#FF4136' },
    { id: 2, name: 'Marketing', color: '#0074D9' },
    { id: 3, name: 'Boisson', color: '#B4A512' },
    { id: 4, name: 'Ceciscrollable', color: '#C47845' },
    { id: 5, name: 'Graphisme', color: '#B4A512' },
    { id: 6, name: 'Secretariat', color: '#B4A512' },
    { id: 7, name: 'Autres', color: '#B4A512' },
];

const elements = [
    {
        id: 1,
        categorie: 3,
        nom: 'Pepsi',
        bio: 'Première boisson consommée au monde',
        photoProfil: require('../../assets/images/brands/ag1.png'),
        photoPresentation: require('../../assets/images/cover.png'),
        adresse: 'USA',
        certificate: 0
    },
    {
        id: 2,
        categorie: 3,
        nom: 'Coca Cola',
        bio: 'Vous savez qui je suis',
        photoProfil: require('../../assets/images/brands/ag2.png'),
        photoPresentation: require('../../assets/images/cover.png'),
        adresse: 'Amérique du Sud',
        certificate: 1
    },
    {
        id: 3, categorie: 1,
        nom: 'Dell XPS',
        bio: 'Ordinateur portable performant pour les professionnels et les créateurs',
        photoProfil: require('../../assets/images/brands/ag3.png'),
        photoPresentation: require('../../assets/images/cover.png'),
        adresse: 'USA',
        certificate: 1
    },
    {
        id: 4,
        categorie: 2,
        nom: 'Canva',
        bio: 'Outil de conception graphique en ligne, utilisé pour créer des visuels de marketing',
        photoProfil: require('../../assets/images/brands/ag4.jpg'),
        photoPresentation: require('../../assets/images/cover.png'),
        adresse: 'Australie',
        certificate: 0
    },
    {
        id: 5,
        categorie: 3,
        nom: 'Red Bull',
        bio: 'Boisson énergisante vendue par Red Bull GmbH, connue pour ses campagnes de marketing',
        photoProfil: require('../../assets/images/brands/ag5.jpg'),
        photoPresentation: require('../../assets/images/cover.png'),
        adresse: 'Autriche',
        certificate: 1
    }
];

const Exposants = ({ navigation }) => {
    const openDetails = (item) => {
        if (item) {
            navigation.navigate('ExposantDetails', { imageItem: item });
        }
    };
    const [activeCategory, setActiveCategory] = useState(null);

    const filterElements = activeCategory ? elements.filter(element => element.categorie === activeCategory) : elements;
    const keyExtractor = (item) => item.id !== null ? item.id.toString() : 'all';

    const renderCategoryItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => setActiveCategory(item.id)}
            style={[
                styles.categoryItem,
                activeCategory === item.id
                    ? { backgroundColor: item.color ? item.color : 'white' } // Active background color
                    : { borderColor: item.color, borderWidth: 1 } // Inactive border
            ]}
        >
            <Text
                style={{
                    color: activeCategory === item.id && !item.color ? 'black' : activeCategory === item.id ? 'white' : item.color, // Text color change
                    fontWeight: 'bold',
                }}
            >
                {item.name}
            </Text>
        </TouchableOpacity>
    );

    const renderElementItem = ({ item }) => (
        <View style={styles.card}>
            <TouchableOpacity onPress={() => openDetails(item)}>
                <Image source={item.photoProfil} style={styles.profilePic} />
                {item.certificate === 1 && (
                    <Icon name="shield-checkmark" size={24} color="gold" style={styles.certifiedIcon} />
                )}
                <Image source={item.photoPresentation} style={styles.coverPhoto} />
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{item.nom}</Text>
                    <Text style={styles.bio}>{item.bio}</Text>
                    <Text style={styles.address}>{item.adresse}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>LES EXPOSANTS</Text>
            <FlatList
                horizontal
                data={[{ id: null, name: 'All' }, ...categories]}
                renderItem={renderCategoryItem}
                keyExtractor={keyExtractor}
                showsHorizontalScrollIndicator={false}
                style={styles.categoriesList}
                contentContainerStyle={styles.categoriesListContent}
            />
            <FlatList
                data={filterElements}
                renderItem={renderElementItem}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                style={styles.elementsList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME_COLORS.c950,
    },
    title: {
        fontSize: 27,
        marginLeft: 10,
        marginBottom: 20,
        color: '#ffffff',
        fontFamily: 'Ubuntu-Bold',
        marginTop: 20
    },
    categoriesList: {
        flexGrow: 0,
    },
    categoriesListContent: {
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    categoryItem: {
        borderRadius: 20, // Rounded corners for the category buttons
        paddingVertical: 8, // Vertical padding for the category buttons
        paddingHorizontal: 16, // Horizontal padding for the category buttons
        marginHorizontal: 10, // Space between category buttons
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryText: {
        color: 'grey',
        marginHorizontal: 10,
    },
    activeCategoryText: {
        color: 'white',
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#1e1e1e', // Dark card color
        margin: 10,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 10,
    },
    profilePic: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 3,
        borderColor: '#fff',
        marginTop: 20, // Adjust the margin to position the profile image correctly
        marginLeft: 10,
    },
    certifiedIcon: {
        position: 'absolute',
        top: 15,
        right: 15,
    },
    coverPhoto: {
        width: width - 20, // Full width of the card
        height: 200,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    infoContainer: {
        padding: 20,
    },
    name: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    bio: {
        color: 'lightgrey',
        fontSize: 14,
    },
    address: {
        color: 'grey',
        fontSize: 12,
    },
    elementsList: {
        flex: 1,
    },
    // Add other styles here as needed
});

export default Exposants;