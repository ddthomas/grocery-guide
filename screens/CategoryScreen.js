import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Search from "../components/Search";
import Questions from "../components/Questions";
import API from "../libs/api";

const api = API({});

function CategoryScreen({ navigation, route }) {
	console.log(route);
	const {eduID} = route.params;
    const eduContent = api.getByID({ key: "eduContent", id: eduID });
    console.log(eduContent);
    const questions = [api.getByID({ key: "eduContent", id: eduID })];
    console.log(questions);
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

			  <Text>{eduContent.question}</Text>
              <Questions data={questions} />
              <Text>{eduContent.class} > {eduContent.category}</Text>

		</View>
	);
}

//     render() {

//         console.log(this.props);
//         let { category } = this.props.route.params;
//         const questions = api.getByCategory({ key: "eduContent", categoryName: category });

//         return (
//             <View>
//                 <Search />
//                 <View>
//                     <Text>Category: {category}</Text>
//                     <Text>Questions / Items in this Grocercy Aisle</Text>
//                     <Questions data={questions} />
//                 </View>
//             </View>
//         );
//     }
// }

export default CategoryScreen;
