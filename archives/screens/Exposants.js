import React, { useRef, useState, useMemo } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, ImageBackground, Animated } from 'react-native';

const Data = [
    {
        id: '1',
        image: require('../../assets/images/brands/ag1.png'),
        cover: require('../../assets/images/bg.jpg'),
        label: 'Pepsi',
        categorie: '1'
    },
    {
        id: '2',
        image: require('../../assets/images/brands/ag2.png'),
        cover: require('../../assets/images/bg.jpg'),
        label: 'Coca Cola',
        categorie: '1'
    },
    {
        id: '3',
        image: require('../../assets/images/brands/ag3.png'),
        cover: require('../../assets/images/bg.jpg'),
        label: 'Monster Energy',
        categorie: '1'
    },
    {
        id: '4',
        image: require('../../assets/images/brands/ag4.png'),
        cover: require('../../assets/images/bg.jpg'),
        label: 'Heineken',
        categorie: '1'
    },
    {
        id: '5',
        image: require('../../assets/images/brands/ag5.jpg'),
        cover: require('../../assets/images/bg.jpg'),
        label: 'Drink',
        categorie: '1'
    },
    {
        id: '6',
        image: require('../../assets/images/brands/ag6.png'),
        cover: require('../../assets/images/bg.jpg'),
        label: 'PSG',
        categorie: '2'
    },
    {
        id: '7',
        image: require('../../assets/images/brands/ag7.webp'),
        cover: require('../../assets/images/bg.jpg'),
        label: 'FC Barcelona',
        categorie: '2'
    },
    {
        id: '8',
        image: require('../../assets/images/brands/ag8.webp'),
        cover: require('../../assets/images/bg.jpg'),
        label: 'Real Madrid',
        categorie: '2'
    },
    {
        id: '9',
        image: require('../../assets/images/brands/ag9.webp'),
        cover: require('../../assets/images/bg.jpg'),
        label: 'Liverpool',
        categorie: '2'
    },
];

const { width } = Dimensions.get('window');
const itemWidth = width * 0.8;
const itemMargin = 10;
const spacerWidth = (width - itemWidth) / 2 - itemMargin;

const Home = ({ navigation }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;

    // Tri et regroupement des données par catégorie
    const sortedData = useMemo(() => {
        // Tri des éléments par catégorie
        return Data.sort((a, b) => a.categorie.localeCompare(b.categorie));
    }, [Data]);

    const openDetails = (item) => {
        if (item) {
            navigation.navigate('ExposantDetails', { imageItem: item });
        }
    };

    const renderItem = ({ item, index }) => {
        const inputRange = [
            (index - 2) * (itemWidth + itemMargin * 2),
            (index - 1) * (itemWidth + itemMargin * 2),
            index * (itemWidth + itemMargin * 2),
        ];

        const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.9, 1, 0.9],
            extrapolate: 'clamp',
        });

        const rotateY = scrollX.interpolate({
            inputRange,
            outputRange: ['30deg', '0deg', '-30deg'],
            extrapolate: 'clamp',
        });

        return (
            <TouchableOpacity onPress={() => openDetails(item)}>
                <Animated.View style={[styles.carouselItem, { transform: [{ scale }, { rotateY }] }]}>
                    <Image source={item.image} style={styles.image} />
                    <Text style={styles.label}>{item.label}</Text>
                    <Text style={styles.rating}>
                        {'⭐️ Catégorie: ' + item.categorie}
                    </Text>
                </Animated.View>
            </TouchableOpacity>
        );
    };

    const handleScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        {
            useNativeDriver: true,
            listener: event => {
                const newIndex = Math.floor(event.nativeEvent.contentOffset.x / (itemWidth + itemMargin * 2) + 0.5);
                setActiveIndex(newIndex);
            },
        }
    );

    return (
        <ImageBackground source={require('../../assets/images/bg.jpg')} style={styles.backgroundImage} blurRadius={10}>
            <View style={styles.container}>
                <Animated.FlatList
                    horizontal
                    data={sortedData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    snapToAlignment="start"
                    snapToInterval={itemWidth + itemMargin * 2}
                    decelerationRate="fast"
                    pagingEnabled
                    scrollEventThrottle={16}
                    onScroll={handleScroll}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal: spacerWidth,
                    }}
                />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        marginTop: 30
    },
    backgroundImage: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
    },
    carouselItem: {
        width: itemWidth,
        marginHorizontal: itemMargin,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 20,
        backfaceVisibility: 'hidden', // Empêcher le renversement du texte lors de la rotation
    },
    image: {
        width: '80%',
        height: '80%',
        borderRadius: 1,
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'white',
    },
    rating: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 5,
    },
});

export default Home;