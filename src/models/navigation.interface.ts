import { NativeStackNavigationOptions, NativeStackNavigationProp } from "@react-navigation/native-stack";

export interface Screen {
    name: string;
    component: any;
    options?: NativeStackNavigationOptions;
}

export interface ScreenProps {
    navigation: NativeStackNavigationProp<any>;
    route: any;
}


export interface SlideType {
    title: string;
    image: any;
    description?: string
}