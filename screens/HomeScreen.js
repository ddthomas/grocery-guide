import React from "react";
import { StyleSheet, ScrollView, Text, View, Button } from "react-native";

function HomeScreen({ navigation }) {
	return (
		<ScrollView>
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Text>Home Screen</Text>
				<Button title="Detail Section" onPress={() => navigation.navigate("Details")} />
			</View>
		</ScrollView>
	);
}

export default HomeScreen;
