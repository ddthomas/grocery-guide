import React from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Category({ _id, category }) {
	const navigation = useNavigation();
	return <Button title={category} onPress={() => navigation.navigate("Category",{eduID: _id})} />;
}

export default function Questions({ data }) {
	const questions = data;
	return questions.map((eduContent) => {
		return <Category key={eduContent._id} {...eduContent} />;
	});
}
