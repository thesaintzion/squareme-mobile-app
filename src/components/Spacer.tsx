import React from "react";
import { Animated, Easing,  StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface LocalProps {
	size?: number;
	mt?: number;
	mb?: number;
}
export const Spacer: React.FC<LocalProps> = ({ size = 15, mt = 0, mb = 0 }) => (
	<View style={{ height: size, marginTop: mt, marginBottom: mb }} />
);
