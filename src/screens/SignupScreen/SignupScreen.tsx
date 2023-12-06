import React from "react";
import { Alert, ScrollView, StatusBar, StyleSheet, View } from "react-native";

import { AppButton, NavHeader, Spacer, AppText, Row, AppInput, CountryInput } from "@src/components";
import { ScreenProps } from "@src/models";
import { colors, routes } from "@src/utils";

interface LocalProps extends ScreenProps { }

export const SignupScreen: React.FC<LocalProps> = ({ navigation }) => {

    const handleProceed = () => {
        navigation.navigate(routes.PHONE_OTP);
    }

    const handleCountrySelect = () => {
        // We could launch a screen to select list of countries
        Alert.alert("launch a screen to select list of countries")
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.WHITE} barStyle='dark-content' />
            <NavHeader title="Enter Your Phone Number" />

            <ScrollView style={{ paddingHorizontal: 20 }}>
                <AppText.Medium style={{ width: '80%', alignSelf: 'center', fontSize: 15, lineHeight: 20, textAlign: 'center', color: colors.LIGHT_TEXT, marginVertical: 35 }}>We'll send an SMS with a code to verify your phone number</AppText.Medium>

                <Row style={{ gap: 10, justifyContent: "space-between" }}>
                    <CountryInput onPress={handleCountrySelect} countryCode='+234'  placeholder="+234"   />
                    <AppInput  placeholder="Phone Number" keyboardType="number-pad" conStyle={{ flex: 1 }} />
                </Row>

                <AppInput placeholder="Have a referral ID?" value={""} iconRight='gift-card' placeholderTextColor={colors.TEXT_PRIMARY}  />
            </ScrollView>

            <View style={styles.actionsCon}>
                <AppButton onPress={handleProceed} text='Proceed' style={{ width: '100%' }} />
                <Spacer />
                <AppText>Already have an account?  <AppText style={{ color: colors.TEXT_PRIMARY }}> Login here </AppText></AppText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: colors.WHITE,
        position: 'relative'
    },

    actionsCon: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        paddingHorizontal: 20,
        alignItems: 'center'
    },
});