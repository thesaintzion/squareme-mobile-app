import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import { AppButton, AppText, NumberKeyboard, Row, Spacer, SquaremeIcon } from "@src/components";
import { ScreenProps } from "@src/models";
import { colors, formatCurrency, } from "@src/utils";



interface LocalProps extends ScreenProps { }

export const WalletScreen: React.FC<LocalProps> = ({ route }) => {
    const [amount, setAmount] = useState('0');
    const isFocused = useIsFocused();

    const handleKeyPress = (value: string) => {
        setAmount((prevValue) => prevValue + value);
    }

    useEffect(() => {
        return () => {
            setAmount('0');
        }
    }, [isFocused]);

    return (
        <>
            <View style={styles.container}>
                <Row style={{ justifyContent: 'space-between', gap: 10, width: '100%' }}>
                    <SquaremeIcon name='scan' size={24} color={colors.WHITE} />

                    <View style={styles.balanceCon}>
                        <AppText.WorkSansRegular style={styles.balanceTitle}>Wallet Balance</AppText.WorkSansRegular>
                        <AppText.WorkSansBold style={styles.balanceSubTitle}>₦ 5,200</AppText.WorkSansBold>
                    </View>

                    <SquaremeIcon name='clock' size={27} color={colors.WHITE} />
                </Row>

                <Row>
                    <AppText.PoppinsRegular style={{ fontSize: 36, color: colors.WHITE }}>₦ </AppText.PoppinsRegular>
                    <AppText.PoppinsRegular style={{ fontSize: 64, color: colors.WHITE }}>{formatCurrency(Number(amount))}</AppText.PoppinsRegular>
                </Row>

                <View style={{ width: '100%' }}>
                    <View style={{ width: '100%' }}>
                        <NumberKeyboard onKeyPress={handleKeyPress} color={colors.WALLET_KEY_COLOR} />
                    </View>
                    <Spacer size={30} />
                    <Row style={{ justifyContent: 'center', gap: 30 }}>
                        <ActionButton onPress={() => { }} text='Request' />
                        <ActionButton onPress={() => { }} text='Send' />
                    </Row>
                </View>

            </View>
        </>
    );
};


const ActionButton: React.FC<{ text: string; onPress: () => void }> = ({ text, onPress }) => {
    return (
        <AppButton onPress={onPress} text={text}
            textStyle={{ color: '#9B9B9B', }} style={{ backgroundColor: '#28293a', width: 135, height: 60, borderRadius: 12, flex: 0 }} />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 40,
        backgroundColor: colors.WALLET_BG,
        position: 'relative',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    balanceCon: {
        backgroundColor: 'rgba(159, 86, 212, 0.10)',
        borderRadius: 12,
        width: 132,
        minHeight: 63,
        padding: 10,
        alignItems: 'center'
    },
    balanceTitle: {
        fontSize: 13,
        color: colors.WALLET_BALANCE_TITLE,
        marginBottom: 3
    },
    balanceSubTitle: {
        fontSize: 18,
        color: colors.WHITE
    }
});
