import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { routes } from "@src/utils";
import { Screen } from "@src/models";
import BottomTabNav from "./BottomTabNav";


const Stack = createNativeStackNavigator();

const navs: Screen[] = [
  {
    name: routes.BOTTOM_TAB_NAV,
    component: BottomTabNav,
  },
];

export const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      {navs.map((i) => (
        <Stack.Screen key={i.name} name={i.name} component={i.component} options={i.options} />
      ))}
    </Stack.Navigator>
  );
};
