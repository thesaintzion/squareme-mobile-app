import React, { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";

import { NavHeader, AppText, CreatePinPad, } from "@src/components";
import { ScreenProps } from "@src/models";
import { colors, routes } from "@src/utils";


interface LocalProps extends ScreenProps { }

export const CreatePinScreen: React.FC<LocalProps> = ({ navigation }) => {
    const [pin, setPin] = useState(['', '', '', '', '', '']);

       //== If the pin is complete, take user to confirm pin screen  ==
    const handlePinComplete = (data: any) => {
        navigation.navigate(routes.CONFIRM_PIN, {pin: data});
    }

    return (
        <View style={styles.container}>
            <View>
                <StatusBar backgroundColor={colors.WHITE} barStyle='dark-content' />
                <NavHeader title="Set Your Security PIN" />
                <View style={{ paddingHorizontal: 20 }}>
                    <AppText style={{ alignSelf: 'center', fontSize: 16, textAlign: 'center', color: '#4F4F4F', marginVertical: 35, lineHeight: 20 }}>
                        Set a six digit PIN that you would use for all transactions
                    </AppText>
                </View>
            </View>
            <CreatePinPad pin={pin} setPin={setPin} onComplete={handlePinComplete} />
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 40,
        paddingBottom: '20%',
        backgroundColor: colors.WHITE,
    },
});