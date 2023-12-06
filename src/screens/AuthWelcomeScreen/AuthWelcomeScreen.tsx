import { AppButton, Spacer } from "@src/components";
import { toggleAnimation } from "@src/components/animations";
import { ScreenProps } from "@src/models";
import { colors } from "@src/utils";
import { routes } from "@src/utils/constants.util";
import React, { useEffect } from "react";
import { Image, LayoutAnimation, StatusBar, StyleSheet, Text, View } from "react-native";

interface LocalProps extends ScreenProps { }

export const AuthWelcomeScreen: React.FC<LocalProps> = ({ navigation, route }) => {

useEffect(() => {
    LayoutAnimation.configureNext(toggleAnimation);
}, [route])


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.PRIMARY} barStyle='light-content' />
            <View style={styles.logoCon}>
                <Image source={require('@assets/logo-light.png')} style={{ width: 300 }} resizeMode='contain' />
            </View>
            <Spacer size={50} />
            <View style={styles.actionsCon}>
                <AppButton type="light" text="Create an account" onPress={() => navigation.navigate(routes.SIGNUP)} style={{ width: '100%', flex: 0, }} />
                <Spacer size={28} />
                <AppButton text="I have an account" onPress={() => {}} style={{ borderColor: colors.WHITE, borderWidth: 1, width: '100%', flex: 0 }} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        paddingVertical: 60,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: colors.PRIMARY
    },
    actionsCon: {
        width: '100%',
        padding: 20,

    },
    logoCon: {
        height: '30%',
    }
});