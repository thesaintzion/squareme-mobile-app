import { Dimensions, Platform } from "react-native";

// Object.freeze to Prevents the modification

export const keys = Object.freeze({
    HAS_SEEN_WELCOME_SLIDES: 'hasSeenWelcomeSlides'
});


export const colors = Object.freeze({
    PRIMARY: '#000A4A',
    WHITE: '#FFFfff',
    BLACK: '#000',
    DANDER: "#ff0302",
    COOL_GRAY: "rgb(156, 163, 175)", // or "#0000007c"
    LIGHT_GRAY: "#A8A8A8",
    TEXT_PRIMARY: '#9F56D4',
    TEXT_PRIMARY_LIGHT: '#F6EFFB',
    WALLET_BG: '#0C0C26',
    WALLET_BALANCE_TITLE: '#BDBDBD',
    WALLET_KEY_COLOR: '#BDBDBD',

    HOME_SECTION_TITLE: '#656565',
    BTN_DISABLED: '#D3D3D3',
    BTN_DISABLED_OUTLINE: '#B6B6B6',
    BTN_DISABLED_TEXT: '#C4C4C4',
    
    INPUT_BORDER: '#D0D5DD',
    LIGHT_TEXT: '#4F4F4F',

    COUNTRY_INPUT_TEXT: '#828282',

    OTP_INPUT_BG: '#F2F8FF'
})

export const routes = Object.freeze({
    ONBOARD: 'OnboardScreen',
    AUTH_WELCOME: 'AuthWelcomeScreen',
    SIGNUP: 'SignupScreen',
    PHONE_OTP: 'PhoneOtpScreen',
    CREATE_PIN: 'CreatePinScreen',
    CONFIRM_PIN: 'ConfirmPinScreen',
    HOME: 'HomeScreen',
    WALLET: 'WalletScreen',
    PROFILE: 'ProfileScreen',
    BOTTOM_TAB_NAV: 'BottomTabNav'
});


export const sizes = {
    FULL_WIDTH: Dimensions.get("window").width,
    FULL_HEIGHT: Dimensions.get("window").height,
    IS_IOS: Platform.OS === "ios",
    IS_ANDROID: Platform.OS === "android",
}

