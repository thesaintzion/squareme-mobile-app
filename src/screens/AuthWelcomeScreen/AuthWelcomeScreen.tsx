import { AppButton, Spacer } from "@src/components";
import { ScreenProps } from "@src/models";
import { colors } from "@src/utils";
import { routes } from "@src/utils/constants.util";
import React, { useEffect } from "react";
import { Animated, Image, StatusBar, StyleSheet, View } from "react-native";

interface LocalProps extends ScreenProps { }

export const AuthWelcomeScreen: React.FC<LocalProps> = ({ navigation }) => {
    const animationTime = new Animated.Value(-400, { useNativeDriver: false });

    const moveBike = () => {
        Animated.timing(animationTime, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    };

    const moveBikeStye = {
        transform: [
            {
                translateY: animationTime,
            },
        ],
    };

    useEffect(() => {
        moveBike();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.PRIMARY} barStyle='light-content' />

            <Animated.View style={moveBikeStye}>
                <Image source={require('@assets/logo-light.png')} style={styles.logo} resizeMode='contain' />
            </Animated.View>

            <Spacer size={50} />
            <View style={styles.actionsCon}>
                <AppButton type="light" text="Create an account" onPress={() => navigation.navigate(routes.SIGNUP)} style={{ width: '100%', flex: 0, }} />
                <Spacer size={28} />
                <AppButton text="I have an account" onPress={() => { }} style={{ borderColor: colors.WHITE, borderWidth: 1, width: '100%', flex: 0 }} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        paddingVertical: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.PRIMARY
    },
    actionsCon: {
        width: '100%',
        padding: 20,
        position: 'absolute',
        bottom: 60,
    },
    logo: {
        width: 200,
        height: 100,
    },
});