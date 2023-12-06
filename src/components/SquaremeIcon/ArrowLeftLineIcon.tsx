import React from "react";
import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";

export const ArrowLeftLineIcon: React.FC<{ color?: string, size?: number }> = ({ color = "#000", size = 24 }) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <G clip-path="url(#clip0_1_366)">
                <Path d="M7.828 11H20V13H7.828L13.192 18.364L11.778 19.778L4 12L11.778 4.22198L13.192 5.63598L7.828 11Z" fill={color} />
            </G>
            <Defs>
                <ClipPath id="clip0_1_366">
                    <Rect width="24" height="24" fill="white" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};
