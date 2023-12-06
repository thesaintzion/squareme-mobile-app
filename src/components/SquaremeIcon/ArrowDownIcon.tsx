import React from "react";
import { Path, Svg } from "react-native-svg";

export const ArrowDownIcon: React.FC<{ color?: string, size?: number }> = ({ color = "#828282", size = 24 }) => {
    return (
        <Svg width="12" height="12" viewBox="0 0 12 12"  fill="none">
            <Path d="M3 4.5L6 7.5L9 4.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    );
};
