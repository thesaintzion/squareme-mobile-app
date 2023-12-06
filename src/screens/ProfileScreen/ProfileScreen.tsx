import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";

import { AppText } from "@src/components";
import { ScreenProps } from "@src/models";
import { colors, } from "@src/utils";

interface LocalProps extends ScreenProps { }

export const ProfileScreen: React.FC<LocalProps> = ({ route }) => {
    return (
        <View style={styles.container}>
           <StatusBar backgroundColor={colors.WHITE} barStyle='dark-content' />
            <AppText.Bold>COMING SOON...</AppText.Bold>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: colors.WHITE,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
});
