import React from "react";
import { Text, View, Button } from "react-native";
import Search from "../components/Search";
import Questions from "../components/Questions";
import API from "../libs/api";

const api = API({});

function CategoryScreen({ navigation, route }) {
	console.log(route);
	const { categoryID } = route.params;
	const eduContent = api.getByCategoryID({ key: "eduContent", id: categoryID });
	console.log(eduContent);

	function renderEduContent(eduContent) {
		return eduContent.map((item) => {
			const category = api.getByID({
				key: "categories",
				id: item.categoryID,
			});
			return (
				<View key={item._id}>
					<Text>{item.question}</Text>
					<Text>
						{item.class} > {category.categoryName}
					</Text>
				</View>
			);
		});
	}

	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>{renderEduContent(eduContent)}</View>
	);
}

export default CategoryScreen;
