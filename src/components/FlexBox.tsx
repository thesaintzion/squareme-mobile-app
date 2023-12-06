import { View, ViewProps } from "react-native";

interface RowType extends ViewProps {
	children?: React.ReactElement | React.ReactElement[] | any;
}

export const Row = ({ children, ...props }: RowType) => {
	return (
		<View
			{...props}
			style={[{ flexDirection: "row", alignItems: "center" }, props.style]}
		>
			{children}
		</View>
	);
};