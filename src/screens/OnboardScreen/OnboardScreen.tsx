import React, { useRef, useState } from 'react';
import { View, Image, FlatList, Animated, Dimensions, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { keys, routes } from '@src/utils/constants.util';
import { ScreenProps, SlideType } from "@src/models";
import { colors } from "@src/utils";
import { AppButton, SlideCard } from '@src/components';
import styles from './styles';


const { width } = Dimensions.get('window');

interface LocalProps extends ScreenProps { }

const slides: SlideType[] = [
    {
        title: 'Fast and easy payments to anyone.',
        description: 'Receive funds sent to you in seconds.',
        image: require('@assets/slide-1.png')
    },
    {
        title: 'A super secure way to pay your bills',
        description: 'Pay your bills with the cheapest rates in town.',
        image: require('@assets/slide-2.png')
    },
    {
        title: 'Spend your money easily without any complications',
        description: '',
        image: require('@assets/slide-3.png')
    },
];

export const OnboardScreen: React.FC<LocalProps> = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollView = useRef<FlatList>(null);
    const scrollX = new Animated.Value(0);

    const handleNext = () => {
        if (currentIndex < slides.length - 1) {
            if (scrollView.current) {
                scrollView.current.scrollToIndex({ index: currentIndex + 1 });
            }
        }
    };

    const handleSkip = () => {
        if (scrollView.current) {
            // Here we could save the state in the local storage so the user wont see this again...
            navigation.replace(routes.AUTH_WELCOME);
        }
    };

    const handleGetStarted = async () => {
        try {
            // Save in AsyncStorage that the user has seen the welcome slides
            // and we could use this to determine if we will show the Slide or the AuthWelcome screen when the user opens the app again...
            await AsyncStorage.setItem(keys.HAS_SEEN_WELCOME_SLIDES, 'true');

            // Navigate to the Login screen
            navigation.replace(routes.AUTH_WELCOME);
        } catch (error) {
            console.error('Error saving welcome slides status:', error);
        }
    };


    return (
        <View style={{ flex: 1, backgroundColor: colors.BLACK, position: 'relative' }}>
            <StatusBar barStyle='light-content' />
            <FlatList
                ref={scrollView}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                data={slides}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (<SlideCard item={item} key={index} />)}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
                scrollEventThrottle={16}
                onMomentumScrollEnd={(event) => {
                    const index = Math.round(event.nativeEvent.contentOffset.x / width);
                    setCurrentIndex(index);
                }}
            />

            {/* Logo */}
            <View style={styles.logoCon}>
                {currentIndex == 1 ?
                    <Image source={require('@assets/logo-dark.png')} style={{ width: 140 }} resizeMode='contain' /> :
                    <Image source={require('@assets/logo-light.png')} style={{ width: 140 }} resizeMode='contain' />
                }
            </View>

            {/* Indicators */}
            <View style={styles.indicatorCon}>
                {slides.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.indicator,
                            currentIndex == index && {
                                backgroundColor: colors.WHITE,
                            },
                        ]}
                    />
                ))}
            </View>

            {/* Skip and Next buttons */}
            <View style={styles.actionsCon}>
                {currentIndex < slides.length - 1 ?
                    <AppButton onPress={handleSkip} text='Skip' style={styles.btnSkip} />
                    : null}
                {currentIndex < slides.length - 1 ? <AppButton onPress={handleNext} text='Next' type='light' /> :
                    <AppButton onPress={handleGetStarted} text='Get Started' type='light' />
                }
            </View>
        </View>
    );
};

