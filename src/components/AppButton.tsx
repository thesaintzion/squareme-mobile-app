import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react';
import { colors } from '@src/utils';
import { AppText } from './AppText';

interface LocalProp {
    onPress: () => void;
    text: string;
    type?: 'dark' | 'light',
    textStyle?: StyleProp<TextStyle>,
    style?: StyleProp<ViewStyle>,
    disabled?: boolean
}

export const AppButton: React.FC<LocalProp> = ({ onPress, text, type = 'dark', style, textStyle, disabled }) => {
    return (
        <TouchableOpacity disabled={disabled} style={[styles.btn, { backgroundColor: type === 'light' ? colors.WHITE : (disabled ? colors.BTN_DISABLED : colors.PRIMARY), borderColor:  (disabled ? colors.BTN_DISABLED_OUTLINE : colors.PRIMARY) }, style]} onPress={onPress} >
            <AppText.Bold style={[{ color: type === 'light' ?  (disabled ? colors.BTN_DISABLED_TEXT :  colors.BLACK) : colors.WHITE, fontSize: 15 }, textStyle]}>{text}</AppText.Bold>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        flex: 1,
        height: 50,
        minWidth: 108,
        borderRadius: 8,
        backgroundColor: colors.PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
    }
})