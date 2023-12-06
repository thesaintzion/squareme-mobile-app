import React, { useState } from "react";
import { Image, ImageBackground, Pressable, StatusBar, StyleSheet, View } from "react-native";

import { AppButton, AppText, Row, Spacer, SquaremeIcon, SquaremeIconName } from "@src/components";
import { ScreenProps } from "@src/models";
import { colors, routes } from "@src/utils";


interface LocalProps extends ScreenProps { }

interface ButtonIconProp {
    color?: string;
    icon: SquaremeIconName,
    bg: string, title?: string
    // onPress?: () => void # we could add this..
}

export const HomeScreen: React.FC<LocalProps> = ({ navigation }) => {
    const [balanceHidden, setBalanceHidden] = useState(true);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'transparent'} barStyle='dark-content' />

            <ImageBackground source={require("@assets/icons/bg-1.png")} style={styles.header}>
                <Row style={{ justifyContent: 'space-between' }}>
                    <Row style={{ gap: 10 }}>
                        <Pressable onPress={() => navigation.navigate(routes.PROFILE)}>
                            <Image source={require("@assets/icons/user.png")} style={styles.user} resizeMode='contain' />
                        </Pressable>
                        <View>
                            <AppText style={{ color: '#828282' }}>Hello,</AppText>
                            <AppText style={{ color: '#0C0C26' }}>David Oloye</AppText>
                        </View>
                    </Row>

                    <Row style={{ gap: 10 }}>
                        <ButtonIcon icon='scan' bg={colors.WHITE} />
                        <ButtonIcon icon='notification' bg={colors.WHITE} />
                    </Row>
                </Row>

                <View style={{ alignItems: 'center', }}>
                    <AppText style={{ fontSize: 13, color: '#000A4A' }}>Wallet Balance</AppText>
                    <BalanceBox hidden={balanceHidden} balance="8,000" onPress={() => setBalanceHidden(!balanceHidden)} />
                </View>

                <Row style={{ justifyContent: 'center', gap: 30 }}>
                    <AppButton onPress={() => { }} text='Fund' style={{ width: 123, flex: 0, borderRadius: 12 }} />
                    <AppButton onPress={() => { }} text='Withdraw' type='light' textStyle={{ color: '#747474' }} style={{ backgroundColor: '#E1E1E1', width: 123, flex: 0, borderRadius: 12 }} />
                </Row>
            </ImageBackground>

            <Spacer size={30} />

            <View style={{ paddingHorizontal: 20 }}>
                <AppText.Bold style={styles.sectionTitle}>Quick Access</AppText.Bold>
                <Spacer />

                <Row style={{ gap: 30 }}>
                    <ButtonIcon title='Pay Bills' icon='bill' color={colors.TEXT_PRIMARY} bg={colors.TEXT_PRIMARY_LIGHT} />
                    <ButtonIcon title="Giftcards" icon='gift-card' color={colors.TEXT_PRIMARY} bg={colors.TEXT_PRIMARY_LIGHT} />
                    <ButtonIcon title="Cards" icon='credit-card' color={colors.TEXT_PRIMARY} bg={colors.TEXT_PRIMARY_LIGHT} />
                </Row>
            </View>

            <Spacer size={40} />

            <View style={{ paddingHorizontal: 20 }}>
                <AppText.Bold style={styles.sectionTitle}>Recent Transactions</AppText.Bold>
                <Spacer size={30} />

                <View style={{ alignItems: 'center' }}>
                    <SquaremeIcon name='notes' size={64} />
                    <AppText.Bold style={{ color: '#4F4F4F', fontSize: 18, marginBottom: 10 }}>No recent transaction</AppText.Bold>
                    <AppText style={{ color: '#9A9A9A', textAlign: 'center', width: '80%', alignSelf: 'center', lineHeight: 20 }}>You have not performed any transaction, you can start sending and requesting money from your contacts.</AppText>
                </View>
            </View>
        </View>
    );
};


const BalanceBox: React.FC<{ hidden: boolean, balance: string, onPress: () => void }> = ({ balance, hidden, onPress }) => {
    return (
        <Pressable onPress={onPress}>
            <Row style={{ paddingHorizontal: 10, alignItems: 'flex-start' }}>
                {hidden ? <Image source={require("@assets/balance-blur.png")} style={{ width: 170, height: 50 }} resizeMode='contain'  /> :
                    <>
                        <AppText style={{ fontSize: 25 }}>₦ </AppText>
                        <AppText.Bold style={{ fontSize: 40, lineHeight: 43 }}>{balance}</AppText.Bold>
                    </>
                }
            </Row>
        </Pressable>
    )
}


const ButtonIcon: React.FC<ButtonIconProp> = ({ color, bg, title, icon, }) => {
    return (
        <>
            {title ? <View style={{ alignItems: 'center', gap: 10 }}>
                <Pressable style={[styles.icon, { backgroundColor: bg }]}>
                    <SquaremeIcon name={icon} color={color} />
                </Pressable>
                <AppText.Bold style={{ fontSize: 15, color: '#3E3E3E' }}>{title}</AppText.Bold>
            </View> : <Pressable style={[styles.icon, { backgroundColor: bg }]}>
                <SquaremeIcon name={icon} color={color} />
            </Pressable>}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        position: 'relative'
    },
    header: {
        height: 316,
        padding: 20,
        paddingTop: 60,
        justifyContent: 'space-between',
    },
    user: {
        width: 45,
        height: 45,
        backgroundColor: colors.WHITE,
        borderRadius: 40
    },
    icon: {
        width: 45,
        height: 45,
        backgroundColor: colors.WHITE,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sectionTitle: {
        color: colors.HOME_SECTION_TITLE, fontSize: 16
    }
});
