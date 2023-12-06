import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { MainNavigation } from "./MainNavigation";
import { AuthNavigation } from "./AuthNavigation";
import { useUserContext } from "@src/store";


export const RootNavigation = () => {
  const {isAuthenticated} = useUserContext();

  return <NavigationContainer>{isAuthenticated ? <MainNavigation/> : <AuthNavigation />}</NavigationContainer>;
};
