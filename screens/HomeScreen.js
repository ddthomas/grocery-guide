import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Grocery Aisles (Categories):</Text>
			<Button title="Category" onPress={() => navigation.navigate("Category")} />
			<Text></Text>
			<Text>Top Questions:</Text>
			<Button title="Question" onPress={() => navigation.navigate("Edu")} />
		</View>
	);
}

export default HomeScreen;
