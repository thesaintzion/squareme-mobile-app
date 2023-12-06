import React, { useEffect, useState } from "react";
import { Alert, ScrollView, StatusBar, StyleSheet, View } from "react-native";

import { AppButton, NavHeader, Spacer, AppText, OtpInput, SuccessModal } from "@src/components";
import { ScreenProps } from "@src/models";
import { colors, routes } from "@src/utils";


interface LocalProps extends ScreenProps { }

export const PhoneOtpScreen: React.FC<LocalProps> = ({ navigation }) => {
    const [countdown, setCountdown] = useState(60);
    const [otp, setOtp] = useState<string[]>([]);
    const [isSuccessful, setIsSuccessful] = useState(false);


    const handleOTPChange = (data: string[]) => {
        setOtp(data);
    }

    // We could add logic for resending OTP here...
    // Like to make an API call to request a new OTP...
    // Then reset the countdown to 60 seconds
    const handleSendOTP = (type: 'sms' | 'call' | 'whatsapp') => {
        if (countdown > 0) {
            Alert.alert(`Please wait for ${formatCountdown()} to resend`);
            return;
        }
        Alert.alert(`Get the otp via: ${type}`);
        setCountdown(60);
    }

    const formatCountdown = () => {
        const minutes = Math.floor(countdown / 60);
        const seconds = countdown % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };


    useEffect(() => {
        let timer: any;

        if (countdown > 0) {
            timer = setInterval(() => {
                setCountdown(prevCountdown => prevCountdown - 1);
            }, 1000);
        }

        return () => {
            clearInterval(timer);
        };
    }, [countdown]);

    useEffect(() => {
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
                    {formatCountdown()}
                </AppText.Bold>
                <Spacer size={40} />

                <AppText style={{ width: '80%', alignSelf: 'center', fontSize: 14, textAlign: 'center', color: '#4F4F4F' }}>
                    Having trouble receiving SMS? <AppText style={{ color: colors.TEXT_PRIMARY, lineHeight: 0 }} onPress={() => countdown == 0 ? handleSendOTP('sms') : null}>Resend</AppText>{'\n'}Or try other options below
                </AppText>
            </ScrollView>

            <View style={styles.actionsCon}>
                <AppButton disabled={countdown > 0} onPress={() => handleSendOTP('whatsapp')} text='Call me' type='light' style={{ borderWidth: 1 }} />
                <AppButton disabled={countdown > 0} onPress={() => handleSendOTP('whatsapp')} text='Whatsapp' />
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