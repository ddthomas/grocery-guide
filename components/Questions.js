import React from "react";
// import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button, ThemeProvider } from 'react-native-elements';


function Question({ _id, question }) {
	const navigation = useNavigation();
	return (<ThemeProvider>
		<Button title={question} onPress={() => navigation.navigate("Edu",{eduID: _id})} />
		</ThemeProvider>);
}

export default function Questions({ data }) {
	const questions = data;
	return questions.map((eduContent) => {
		return <Question key={eduContent._id} {...eduContent} />;
	});
}
