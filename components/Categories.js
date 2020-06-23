import React from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Category({ _id, category }) {
	const navigation = useNavigation();
	return (
		<Button
			title={category}
			onPress={() =>
				navigation.navigate("Category", {
					category: category,
				})
			}
		/>
	);
}

export default function Categories({ data }) {
	const categories = data;
	return categories.map((category) => {
		return <Category key={category} {...category} />;
	});
}
