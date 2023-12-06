import * as React from "react";
import { Image, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { colors, routes, sizes } from "@src/utils";
import * as screens from "@src/screens";


const Tab = createBottomTabNavigator();

interface TabBarLabelType {
  focused: boolean;
  icon: any;
  size?: number;
  onPress?: () => void;
  name: string
}

interface TapType {
  name: string;
  icon: string[];
  component: any;
}


const getTabBarBackground = (route: any) => {
  const routeName = route?.name ?? routes.HOME;
  switch (routeName) {
    case routes.WALLET:
      return colors.WALLET_BG;
    default:
      return colors.WHITE;
  }
};

const BottomTabNav = () => {
  const tabs: TapType[] = [
    {
      name: routes.HOME,
      icon: [require("@assets/icons/home-active.png"), require("@assets/icons/home.png")],
      component: screens.HomeScreen,
    },
    {
      name: routes.WALLET,
      icon: [require("@assets/icons/wallet-active.png"), require("@assets/icons/wallet.png")],
      component: screens.WalletScreen,
    },
    {
      name: routes.PROFILE,
      icon: [require("@assets/icons/profile-active.png"), require("@assets/icons/profile.png")],
      component: screens.ProfileScreen,
    },
  ];


  return (
    <>
      <Tab.Navigator initialRouteName={routes.HOME} screenOptions={({ route, navigation }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingTop: sizes.IS_IOS ? 10 : 0,
          height: sizes.IS_IOS ? 95 : 70, 
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: getTabBarBackground(route)
        },
      })}>
        {tabs.map((i, index) => (
          <Tab.Screen
            key={index.toString()}
            name={i.name}
            component={i.component}
            options={{
              tabBarIcon: ({ focused }) => <TabBarItem icon={i.icon} name={i.name} focused={focused} />,
            }}
          />
        ))}
      </Tab.Navigator>
    </>
  );
};


const TabBarItem: React.FC<TabBarLabelType> = (props) => {
  const { focused, icon, onPress, name } = props;
  return (
    <TouchableWithoutFeedback onPress={onPress} style={{ alignItems: "center", }}>
      <>
        <Image
          source={focused ? icon[0] : icon[1]}
          style={[styles.icon,
          { opacity: name !== routes.WALLET && !focused ? 0.6 : 1 }
          ]}
          resizeMode='contain'

        />
      </>
    </TouchableWithoutFeedback>
  );
};



const styles = StyleSheet.create({
  icon: {
    width: 27,
    height: 27,
  },
});

export default BottomTabNav;
