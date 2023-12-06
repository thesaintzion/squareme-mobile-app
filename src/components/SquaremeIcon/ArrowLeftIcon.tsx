import React from "react";
import { Path, Svg } from "react-native-svg";

export const ArrowLeftIcon: React.FC<{ color?: string, size?: number }> = ({ color = "#000", size = 20 }) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Path d="M10.828 12L15.778 16.95L14.364 18.364L8 12L14.364 5.63599L15.778 7.04999L10.828 12Z" fill={color} />
        </Svg>
    );
};
