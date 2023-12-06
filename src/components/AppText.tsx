import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

interface LocalProps extends TextProps {
  children: string | any;
  fontSize?: number;
  color?: string;
}

//== Primary font family ==
export const AppText = ({ style, fontSize, color, ...props }: LocalProps) => {
  return <Text {...props} style={[styles.regular, style]} />;
};

AppText.Medium = ({ style, fontSize, ...props }: LocalProps) => {
  return <AppText {...props} style={[styles.bold, style]} />;
};

AppText.Bold = ({ style, fontSize, ...props }: LocalProps) => {
  return <AppText {...props} style={[styles.bold, style]} />;
};


// == Other font families ===
AppText.WorkSansRegular = ({ style, fontSize, ...props }: LocalProps) => {
  return <AppText {...props} style={[styles.workSansRegular, style]} />;
};

AppText.WorkSansBold = ({ style, fontSize, ...props }: LocalProps) => {
  return <AppText {...props} style={[styles.workSansBold, style]} />;
};

AppText.PoppinsRegular = ({ style, fontSize, ...props }: LocalProps) => {
  return <AppText {...props} style={[styles.poppinsRegular, style]} />;
};

AppText.PoppinsSemiBold = ({ style, fontSize, ...props }: LocalProps) => {
  return <AppText {...props} style={[styles.poppinsSemiBold, style]} />;
};

const styles = StyleSheet.create({
  regular: {
    fontFamily: 'DMSans-Regular',
  },
  medium: {
    fontFamily: 'DMSans-Medium',
  },
  bold: {
    fontFamily: 'DMSans-Bold',
  },
  workSansRegular: {
    fontFamily: 'WorkSans-Regular',
  },
  workSansBold: {
    fontFamily: 'WorkSans-Bold',
  },
  poppinsRegular: {
    fontFamily: 'Poppins-Regular',
  },
  poppinsSemiBold: {
    fontFamily: 'Poppins-SemiBold',
  },
});
