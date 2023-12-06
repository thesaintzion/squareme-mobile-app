import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Screen } from "@src/models";
import * as screens from "@src/screens";
import { routes } from "@src/utils/constants.util";


const Stack = createNativeStackNavigator();

const navs: Screen[] = [
  {
    name: routes.ONBOARD,
    component: screens.OnboardScreen,
  },
  {
    name: routes.AUTH_WELCOME,
    component: screens.AuthWelcomeScreen,
    options: {
      headerShown: false,
      title: ""
    }
  },
  {
    name: routes.SIGNUP,
    component: screens.SignupScreen
  },
  {
    name: routes.PHONE_OTP,
    component: screens.PhoneOtpScreen,
  },
  {
    name: routes.CREATE_PIN,
    component: screens.CreatePinScreen,
  },

  {
    name: routes.CONFIRM_PIN,
    component: screens.ConfirmPinScreen,
  },
];



export const AuthNavigation = () => {

  // const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  // const checkWelcomeSlidesStatus = async () => {
  //   try {
  //     // Check if the user has seen the welcome slides
  //     const hasSeenWelcomeSlides = await AsyncStorage.getItem(keys.HAS_SEEN_WELCOME_SLIDES);

  //     if (hasSeenWelcomeSlides === 'true') {
  //       // User has seen the welcome slides, navigate to the Login screen
  //       navigation.navigate(routes.AUTH_WELCOME);
  //     } else {
  //       // User has not seen the welcome slides, show them
  //       // You may also want to handle other cases, e.g., if AsyncStorage.getItem returns null
  //     }
  //   } catch (error) {
  //     console.error('Error checking welcome slides status:', error);
  //   }
  // };

  // useEffect(() => {
  //   checkWelcomeSlidesStatus();
  // }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={routes.ONBOARD}>
      {navs.map((i) => (
        <Stack.Screen key={i.name} name={i.name} component={i.component} options={i.options} />
      ))}
    </Stack.Navigator>
  );
};
