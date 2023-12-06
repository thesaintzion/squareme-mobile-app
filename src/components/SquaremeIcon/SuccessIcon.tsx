import React from "react";
import { Circle, Path, Rect, Svg } from "react-native-svg";

export const SuccessIcon: React.FC<{ color?: string, size?: number }> = ({ color = "#000", size=125 }) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 125 125" fill="none">
            <Rect x="61.2256" y="14.2254" width="2" height="8" rx="1" fill="#00D68F" />
            <Rect x="61.2256" y="102.225" width="2" height="8" rx="1" fill="#00D68F" />
            <Rect x="110.226" y="61.2254" width="2" height="8" rx="1" transform="rotate(90 110.226 61.2254)" fill="#00D68F" />
            <Rect x="22.2256" y="61.2254" width="2" height="8" rx="1" transform="rotate(90 22.2256 61.2254)" fill="#00D68F" />
            <Rect x="92.631" y="30.4056" width="2" height="4" rx="1" transform="rotate(45 92.631 30.4056)" fill="#8CFAC7" />
            <Rect x="33.234" y="89.8026" width="2" height="4" rx="1" transform="rotate(45 33.234 89.8026)" fill="#8CFAC7" />
            <Rect x="94.0452" y="92.631" width="2" height="4" rx="1" transform="rotate(135 94.0452 92.631)" fill="#8CFAC7" />
            <Rect x="34.6482" y="33.234" width="2" height="4" rx="1" transform="rotate(135 34.6482 33.234)" fill="#8CFAC7" />
            <Circle cx="62.2256" cy="62.2254" r="36" fill="#00D68F" />
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M60.0888 68.2254C59.8128 68.2254 59.5488 68.1114 59.3598 67.9104L54.4968 62.7314C54.1178 62.3294 54.1388 61.6964 54.5408 61.3184C54.9438 60.9404 55.5768 60.9604 55.9538 61.3624L60.0788 65.7534L68.4868 56.5514C68.8608 56.1424 69.4928 56.1154 69.9008 56.4874C70.3078 56.8594 70.3358 57.4924 69.9638 57.8994L60.8268 67.8994C60.6398 68.1054 60.3738 68.2234 60.0958 68.2254H60.0888Z" fill="white" />
        </Svg>
    );
};
