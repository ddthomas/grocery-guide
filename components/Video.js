import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Video({ navigation }) {
	return (
		<View style={{ flex: 1 }}>
			<MaterialCommunityIcons name="video-outline" size={128} color="black" />
		</View>
	);
}

export default Video;
