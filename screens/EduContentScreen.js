import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Video from "../components/Video";
import Descriptions from "../components/Descriptions";
//import API from "../libs/api";

//const api = API({});

function EduContentScreen({ navigation, route }) {
	console.log(route);
	const {eduID} = route.params;
	//const eduContent = api.getByID({ key: "eduContent", id: eduID });
	
	//**********

	console.log(eduContent);
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

        <Video />
			  <Text>{eduContent.text}</Text>

		</View>
	);
}

export default EduContentScreen;
