import React from "react";
import { Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

function Question({ _id, question }) {
	const navigation = useNavigation();
	return <Button title={question} onPress={() => navigation.navigate("Edu")} />;
}

export default function Questions({ data }) {
	const questions = data;
	return questions.map((question) => {
		return <Question key={question._id} {...question} />;
	});
}