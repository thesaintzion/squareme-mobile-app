import React from "react";
import { Image, Pressable, StyleProp, StyleSheet, TextInput, TextInputProps, TextStyle, View, ViewStyle } from "react-native";

import { colors } from "@src/utils";
import { SquaremeIcon, SquaremeIconName } from "./SquaremeIcon";
import { AppText } from "./AppText";
import { Row } from "./FlexBox";



interface LocalProps extends TextInputProps {
  error?: string;
  height?: number;
  marginBottom?: number;
  onPress?: () => void;
  conStyle?: StyleProp<ViewStyle>;
  iconRight?: SquaremeIconName,
  iconRightColor?: string,
  style?: StyleProp<TextStyle>
}

const flags = {
  '+234': require('@assets/flag-ng.png')
}

export const AppInput = ({ style, error, height = 52, marginBottom = 20, conStyle, iconRight, iconRightColor = colors.TEXT_PRIMARY, ...props }: LocalProps) => {
  return (
    <View style={[{ marginBottom }, conStyle]}>
      <View style={[styles.fieldView, { borderColor: error ? colors.DANDER : colors.INPUT_BORDER, height }]}>
        <TextInput placeholderTextColor={colors.LIGHT_GRAY} style={[styles.textField, style]} {...props} />
        {iconRight && <View style={{ position: 'absolute', right: 15 }}><SquaremeIcon name={iconRight} color={iconRightColor} /></View>}
      </View>
    </View>
  );
};


export const CountryInput: React.FC<LocalProps & { countryCode: '+234', onPress: () => void }> = ({ style, error, countryCode, onPress, height = 52, marginBottom = 20, conStyle, iconRight, iconRightColor = colors.TEXT_PRIMARY }) => {
  return (
    <Pressable style={[{ marginBottom }, conStyle]} onPress={onPress}>
      <Row style={[styles.fieldView, { borderColor: error ? colors.DANDER : colors.INPUT_BORDER, height, minWidth: 100, }]}>
        <View style={{ position: 'absolute', left: 10 }}>
          <Image source={flags[countryCode]} style={{ width: 23 }} resizeMode='contain' />
        </View>
        <AppText style={styles.countryTextField}>{countryCode}</AppText>
        <View style={{ position: 'absolute', right: 8, }}><SquaremeIcon name='arrow-down' /></View>
      </Row>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textField: {
    fontSize: 17,
    fontFamily: 'DMSans-Regular',
    flex: 1,
    color: colors.BLACK,
    paddingLeft: 20,
    paddingRight: 20,
  },

  countryTextField: {
    color: colors.COUNTRY_INPUT_TEXT,
    marginLeft: 10
  },

  fieldView: {
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.INPUT_BORDER,
    backgroundColor: colors.WHITE,
    position: "relative",
    justifyContent: "center"
  },


});
