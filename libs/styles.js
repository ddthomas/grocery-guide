import React from "react";
import { StyleSheet } from "react-native";

const colors = {
	green: "#B2C9AB",
	blue: "#788AA3",
	yellow: "#E8DDB5",
};

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 16,
	},
	homeScreen: {
		backgroundColor: colors.green,
	},
});
