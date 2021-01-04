import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Search from "../components/Search";
import Questions from "../components/Questions";
//import API from "../libs/api";

//const api = API({});

function CategoryScreen({ navigation, route }) {
	console.log(route);
	const { categoryID } = route.params;
	//const eduContent = api.getByCategoryID({ key: "eduContent", id: categoryID });

	//**********

	console.log(eduContent);
	//const category = api.getByID({ key: "categories", id: categoryID });

	//**********

	return (
		<View style = {styles.categoryScreen}>
			<Text style = {styles.title}>{category.categoryName}</Text>
			<Questions data = {eduContent} />
		</View>
	);
}
	// function renderEduContent(eduContent) {
	// 	return (
	// 		<View>
	// 			<Text style={styles.title}>{category.categoryName}</Text>
	// 			<Questions data={eduContent} />
	// 		</View>
			
	// 	);
	// }
	// return (
	// 	<View style={styles.categoryScreen}>{renderEduContent(eduContent)}</View>
	// );
	// }

	const styles = StyleSheet.create({
		categoryScreen: {
			flex: 1,
			alignItems: "center",
			justifyContent: "center"
		},
		title: {
			fontSize: 24,
		}
	});

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
