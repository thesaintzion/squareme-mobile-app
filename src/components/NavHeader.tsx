import React from "react";
import { Pressable, Text, View } from "react-native";
import { Path, Svg } from "react-native-svg";

import { Row } from "./FlexBox";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppText } from "./AppText";
import { SquaremeIcon } from "./SquaremeIcon";


interface LocalProp {
  title: string;
  arrowColor?: string;
}

export const NavHeader: React.FC<LocalProp> = ({ title, arrowColor = "#000" }) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={{ height: 60, paddingTop: 10, paddingRight: 15, paddingLeft: 15 }}>
      <Row style={{ alignItems: "center",  height: "100%" }}>
        <Pressable onPress={() => navigation.goBack()}>
          <SquaremeIcon name='arrow-left-line' color={arrowColor} />
        </Pressable>
        <AppText.Bold style={{ fontSize: 16, marginLeft: 20 }}>{title}</AppText.Bold>
        <View style={{ width: 50 }}></View>
      </Row>
    </View>
  );
};
