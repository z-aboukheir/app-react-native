import {
	StyleSheet,
	Text,
	View,
	FlatList,
	SafeAreaView,
	TouchableOpacity,
	TouchableNativeFeedback,
	useState,
	Platform,
} from "react-native";

export default function Button({
	children,
	handlePress,
	argumentFunction,
	stylesButton,
	stylesText,
}) {
	const onButtonPress = () => {
		if (argumentFunction) {
			handlePress(argumentFunction);
		} else {
			handlePress();
		}
	};

	/*if (Platform.OS === "android") {
		return (
			<TouchableNativeFeedback
				background={TouchableNativeFeedback.Ripple("white")}
				onPress={handlePress && onButtonPress}
				style={[stylesButton, styles.button]}
			>
				<Text style={[stylesText, styles.text]}>{children}</Text>
			</TouchableNativeFeedback>
		);
	} else {*/
	return (
		<TouchableOpacity
			onPress={handlePress && onButtonPress}
			style={[stylesButton, styles.button]}
		>
			<Text style={[stylesText, styles.text]}>{children}</Text>
		</TouchableOpacity>
	);
	// }
}
const styles = StyleSheet.create({
	button: {
		padding: 10,
		borderRadius: 5,
		marginBottom: 5,
		borderWidth: 1,
	},
	text: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
});
