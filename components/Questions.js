import React from "react";
import { Text } from "react-native";

function Question({ _id, text }) {
	return <Text>{text}</Text>;
}

export default function Questions({ data }) {
	const questions = data;
	return questions.map((question) => {
		return <Question key={question._id} {...question} />;
	});
}
