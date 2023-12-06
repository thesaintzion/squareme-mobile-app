import React, { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";

import { NavHeader, AppText, CreatePinPad, SuccessModal, } from "@src/components";
import { ScreenProps } from "@src/models";
import { colors, routes } from "@src/utils";
import { useUserContext } from "@src/store";


interface LocalProps extends ScreenProps { }

export const ConfirmPinScreen: React.FC<LocalProps> = ({ navigation }) => {
    const [pin, setPin] = useState(['', '', '', '', '', '']);
    const { setIsAuthenticated } = useUserContext();
    const [isSuccessful, setIsSuccessful] = useState(false);

    const handleDone = () => {
        setIsAuthenticated(true);

        setTimeout(() => {
            navigation.replace(routes.BOTTOM_TAB_NAV, { screen: routes.WALLET });
        }, 100)
    }

    const handlePinComplete = (data: any) => {
        setIsSuccessful(true);
    }

    return (
        <View style={styles.container}>
            <View>
                <StatusBar backgroundColor={colors.WHITE} barStyle='dark-content' />
                <NavHeader title="Confirm PIN" />
                <View style={{ paddingHorizontal: 20 }}>
                    <AppText style={{  fontSize: 16,  color: '#4F4F4F', marginVertical: 35, lineHeight: 20 }}>
                        Input your six digit PIN again
                    </AppText>
                </View>
            </View>

            <CreatePinPad pin={pin} setPin={setPin} onComplete={handlePinComplete}  />

            {isSuccessful && <SuccessModal
                title="PIN Set Successfully!"
                description="Your security pin has been set successfully."
                onBtnPress={handleDone} />}
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