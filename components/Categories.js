import React from "react";
// import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {Button, ThemeProvider} from "react-native-elements";

function Category({ _id, categoryName }) {
	const navigation = useNavigation();
	return <ThemeProvider><Button title={categoryName} onPress={() => navigation.navigate("Category",{categoryID: _id})} /></ThemeProvider>;
}

export default function Categories({ data }) {
	const categories = data;
	return categories.map((category) => {
		// "key" is a React thing
		return <Category key={category._id} _id={category._id} categoryName={category.categoryName} />;
	});
}
