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
	const category = api.getByID({ key: "categories", id: categoryID });

	function renderEduContent(eduContent) {
		return (
			<View>
				<Text>{category.categoryName}</Text>
				<Questions data={eduContent} />
			</View>
			
		);
	}
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>{renderEduContent(eduContent)}</View>
	);
	}



// 	function renderEduContent(eduContent) {
// 		return eduContent.map((item) => {
// 			const category = api.getByID({
// 				key: "categories",
// 				id: item.categoryID,
// 			});
// 			return (
// 				<View key={item._id}>
// 					<Text>{category.categoryName}</Text>
// 					<Text>{item.question}</Text>
										
// 				</View>
// 			);
// 		});
// 	}

// 	return (
// 		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>{renderEduContent(eduContent)}</View>
// 	);
// }

export default CategoryScreen;
