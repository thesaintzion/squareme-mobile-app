import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { SquaremeIcon, } from "@src/components";
import { colors } from "@src/utils";


interface NumberKeyboardProp {
    color?: string;
    onKeyPress: (key: string) => void;
}

//A Custom Number Keyboard
export const NumberKeyboard: React.FC<NumberKeyboardProp> = ({ onKeyPress, color = colors.PRIMARY }) => {
    const [input, setInput] = useState([]);

    const numberRows = [
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"],
        ['.', "0", 'DEL'],
    ];;

    const handleKeyPress = (key: any) => {
        // We could handle dot and delete...
        if (key === 'DEL' || key === '.') {
            return;
        }

        onKeyPress(key);
        setInput(key);
    };


 
    return (
        <View style={styles.keyboardCon}>
            {numberRows.map((row, rowIndex) => (
                <View key={rowIndex} style={styles.keyboardRow}>
                    {row.map((key) => (
                        <TouchableOpacity
                            key={key}
                            onPress={() => handleKeyPress(key)}
                            style={styles.keyboardBtn}
                        >
                            {key === 'DEL' ? <SquaremeIcon name='arrow-left' size={30} color='#BDBDBD' /> : <Text style={[styles.keyboardBtnText, { color: color }]}>{key}</Text>}
                        </TouchableOpacity>
                    ))}
                </View>
            ))}
        </View>
    );
};


const styles = StyleSheet.create({
    keyboardCon: {
        justifyContent: 'space-between',
        height: 290
    },
    keyboardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    keyboardBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        height: 50,
        width: 50,
    },
    keyboardBtnText: {
        fontSize: 24,
    },
});