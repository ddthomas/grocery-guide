import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Questions from "../components/Questions";
import Categories from "../components/Categories";
import API from "../libs/api";


const api = API({});

function HomeScreen({ navigation }) {
	const questions = api.get({ key: "eduContent" });
	const categories = api.get({ key: "categories" });
	console.log(questions);
	return (
		<View style={styles.homeScreen}>
			<Text style = {styles.title}>Grocery Aisles (Categories):</Text>
			
			<Categories data={categories} />

			<Text style = {styles.title}>Top Questions:</Text>

			<Questions data={questions} />
		</View>
	);
}

const styles = StyleSheet.create({
	homeScreen: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	title: {
		fontSize: 24
	}
});

export default HomeScreen;
