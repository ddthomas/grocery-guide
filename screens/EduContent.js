import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Video from  '../components/Video';
import Description from "../components/Description";

function EduContent({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Video />
            <Description />
		</View>
	);
}

export default EduContent;
