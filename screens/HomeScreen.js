import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Questions from "../components/Questions";

import API from "../libs/api";

const api = API({});

function HomeScreen({ navigation }) {
	const questions = api.get({ key: "eduContent" });

	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Grocery Aisles (Categories):</Text>
			<Button title="Category" onPress={() => navigation.navigate("Category")} />

			<Text>Top Questions:</Text>

			<Questions data={questions} />
		</View>
	);
}

export default HomeScreen;
