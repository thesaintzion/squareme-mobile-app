import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Dimensions, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { SlideType } from "@src/models";
import { colors } from "@src/utils";
import { AppText } from './AppText';

const { width, height } = Dimensions.get('window');


export const SlideCard: React.FC<{ item: SlideType } & {fadeAnim: Animated.Value }> = ({ item, fadeAnim }) => {
   

    const { image, title, description } = item;
    return (
        <Animated.View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', backgroundColor: colors.BLACK, overflow: 'hidden', opacity: fadeAnim, }}>
            <Image source={image} style={{ width, height, }} resizeMode='cover' />
            <LinearGradient colors={['rgba(105, 105, 105, 0.00)', 'rgba(0,0,0,0.8)', '#000']} style={styles.contentCon}>

                <Animated.View
                    style={{
                        opacity: fadeAnim,
                        transform: [
                            {
                                translateY: fadeAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [10, 0],
                                }),
                            },
                        ],
                    }}
                >
                    <AppText.Bold style={styles.title}>
                        {title}
                    </AppText.Bold>
                    <AppText style={styles.description}>
                        {description}
                    </AppText>
                </Animated.View>
            </LinearGradient>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    contentCon: {
        position: 'absolute', bottom: 0,
        width: '100%',
        borderBottomWidth: 2,
        height: '75%',
        padding: 20,
        justifyContent: 'flex-end',
        paddingBottom: 180
    },
    title: {
        color: '#FFF',
        fontSize: 25,
        marginBottom: 20,
        lineHeight: 35
    },
    description: {
        color: '#FFF',
        fontSize: 15,
    },
});