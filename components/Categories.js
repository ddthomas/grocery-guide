import React from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Category({ _id, categoryName }) {
	const navigation = useNavigation();
	return <Button title={categoryName} onPress={() => navigation.navigate("Category",{categoryID: _id})} />;
}

export default function Categories({ data }) {
	const categories = data;
	return categories.map((category) => {
		// "key" is a React thing
		return <Category key={category._id} _id={category._id} categoryName={category.categoryName} />;
	});
}
