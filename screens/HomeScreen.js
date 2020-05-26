import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

// API
import API from "../libs/api";

const api = API({});

// Components
function Question(props) {
	return <Text>{props.text}</Text>;
}

function Questions(props) {
	return props.data.map((question) => {
		return <Question key={question._id} {...question} />;
	});
}

function HomeScreen({ navigation }) {
	const questions = api.get("questions");

	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Grocery Aisles (Categories):</Text>
			<Button title="Category" onPress={() => navigation.navigate("Category")} />
			<Text></Text>
			<Text>Top Questions:</Text>
			{/*questions.map((question) => {
				return <Question {...question} />;
			})*/}
			<Questions data={questions} />
			<Button title="Question" onPress={() => navigation.navigate("Edu")} />
		</View>
	);
}

export default HomeScreen;
