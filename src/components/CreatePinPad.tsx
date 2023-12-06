import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import { NumberKeyboard, Spacer } from "@src/components";
import { colors } from "@src/utils";


interface CreatePinPadProp {
    onComplete: (sata: string) => void,
    pin: string[],
    setPin: { (data: string[]): void };
}


export const CreatePinPad: React.FC<CreatePinPadProp> = ({ onComplete, pin, setPin }) => {

    const handleKeyPress = (key: any) => {
        const newPin = [...pin];
        // == Find the first empty slot and fill it with the pressed key ==
        const emptyIndex = newPin.findIndex((value) => value === '');
        if (emptyIndex !== -1) {
            newPin[emptyIndex] = String(key);
            setPin(newPin);

     
            if (newPin.every((value) => value !== '')) {
                onComplete(newPin.join(''))
            }
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'space-between', paddingTop: 30, overflow: 'hidden' }}>
            <View style={[styles.otpContainer, { justifyContent: 'center', alignItems: 'center' }]}>
                {pin.slice(0, 3).map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.otpInput}
                        value={digit}
                        editable={false}
                    />
                ))}
                <Text>-</Text>
                {pin.slice(3, 7).map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.otpInput}
                        value={digit}
                        editable={false}
                    />
                ))}
            </View>
            <Spacer />
            <NumberKeyboard onKeyPress={handleKeyPress} />
        </View>
    )
}


const styles = StyleSheet.create({
    otpContainer: {
        flexDirection: "row",
        width: "80%",
        columnGap: 10,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    otpInput: {
        width: 37,
        height: 44,
        textAlign: "center",
        fontSize: 18,
        backgroundColor: colors.OTP_INPUT_BG,
        borderRadius: 8,
    },
});