import React, { useState } from "react";
import { Alert, ScrollView, StatusBar, StyleSheet, View } from "react-native";

import { AppButton, NavHeader, Spacer, AppText, OtpInput, SuccessModal } from "@src/components";
import { ScreenProps } from "@src/models";
import { colors, routes } from "@src/utils";


interface LocalProps extends ScreenProps { }

export const PhoneOtpScreen: React.FC<LocalProps> = ({ navigation }) => {
    const [otp, setOtp] = useState<string[]>([]);
    const [isSuccessful, setIsSuccessful] = useState(false);


    const handleOTPChange = (data: string[]) => {
        setOtp(data);
    }

    const handleSendOTP = (type: 'sms' | 'call' | 'whatsapp') => {
        Alert.alert(`Get the otp via: ${type}`);
    }

    React.useEffect(() => {
        if (otp.length === 5) {
            setIsSuccessful(true);
        } else {
            setIsSuccessful(false);
        }
    }, [otp])


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.WHITE} barStyle='dark-content' />
            <NavHeader title="Verify Phone Number" />
            <ScrollView style={{ paddingHorizontal: 20 }}>
                <AppText.Bold style={{ width: '80%', alignSelf: 'center', fontSize: 14, textAlign: 'center', color: '#4F4F4F', marginVertical: 35 }}>
                    Please input the five digit code that was sent
                    to your phone number below
                </AppText.Bold>

                <OtpInput onChange={handleOTPChange} />

                <Spacer size={20} />
                <AppText.Bold style={{ width: '80%', alignSelf: 'center', fontSize: 15, textAlign: 'center', color: colors.TEXT_PRIMARY }}>
                    0.00
                </AppText.Bold>
                <Spacer size={40} />

                <AppText style={{ width: '80%', alignSelf: 'center', fontSize: 14, textAlign: 'center', color: '#4F4F4F' }}>
                    Having trouble receiving SMS? <AppText style={{ color: colors.TEXT_PRIMARY, lineHeight: 0 }} onPress={() => handleSendOTP('sms')}>Resend</AppText>{'\n'}Or try other options below
                </AppText>
            </ScrollView>

            {/* Disable buttons when timer still counting down */}
            <View style={styles.actionsCon}>
                <AppButton onPress={() => handleSendOTP('whatsapp')} text='Call me' type='light' style={{ borderWidth: 1 }} />
                <AppButton onPress={() => handleSendOTP('whatsapp')} text='Whatsapp' />
            </View>

            {isSuccessful && <SuccessModal
                title="Verification successful!"
                description="Your phone number has been verified successfully."
                onBtnPress={() => navigation.replace(routes.CREATE_PIN)} />}
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
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        columnGap: 15
    },
});