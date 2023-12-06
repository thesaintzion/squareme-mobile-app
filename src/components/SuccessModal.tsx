import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import { AppText } from "./AppText";
import { SuccessIcon } from "./SquaremeIcon/SuccessIcon";
import { AppButton } from "./AppButton";
import { Spacer } from "./Spacer";
import { colors } from "@src/utils";
import { SquaremeIcon } from "./SquaremeIcon";

const { width, height } = Dimensions.get('window');

interface LocalProp {
    title: string;
    description: string;
    bntText?: string;
    onBtnPress: () => void
}

export const SuccessModal: React.FC<LocalProp> = ({ title, description, bntText = 'Okay!', onBtnPress }) => {
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <SquaremeIcon name='success' size={125 } />
                <Spacer size={25}  />
                <AppText.Bold style={{ fontSize: 16 }}>{title}</AppText.Bold>
                <Spacer />
                <AppText>{description}</AppText>
            </View>
            <AppButton onPress={onBtnPress} text={bntText} style={{ width: '100%', flex: 0 }} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        height, width,
        paddingHorizontal: 20,
        paddingTop: '40%', 
        paddingBottom: 60,
        backgroundColor: colors.WHITE,
        position: 'absolute',
        zIndex: 100,
        justifyContent: 'space-between'
    }
});
