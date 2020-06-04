import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Video from  '../components/Video';
import Descriptions from "../components/Descriptions";
import API from "../libs/api";

const api = API({});

function EduContentScreen({ navigation }) {
	const description = api.get({ key: "eduContent" });
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Video />
            <Descriptions data={description} />
		</View>
	);
}

export default EduContentScreen;
