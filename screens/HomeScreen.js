import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Questions from "../components/Questions";
import Categories from "../components/Categories";
import API from "../libs/api";


const api = API({});

function HomeScreen({ navigation }) {
	const questions = api.get({ key: "eduContent" });
	const categories = api.get({ key: "eduContent" });
	console.log(questions);
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Grocery Aisles (Categories):</Text>
			
			<Categories data={categories} />

			<Text>Top Questions:</Text>

			<Questions data={questions} />
		</View>
	);
}

export default HomeScreen;
