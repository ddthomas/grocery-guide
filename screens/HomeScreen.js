import React from "react";
import { StyleSheet, ScrollView, Text, View, Button } from "react-native";

// Components
import SearchInput from "../components/SearchInput";

// Styles
import styles from "../libs/styles";

const homeScreenStyles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
	},
});
const container = StyleSheet.compose(styles.container, homeScreenStyles.container);

function HomeScreen({ navigation }) {
	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
			<SearchInput />
			<View style={container}>
				<Text>Home Screen</Text>
				<Button title="Detail Screen" onPress={() => navigation.navigate("Details")} />
				<Button title="Categories Screen" onPress={() => navigation.navigate("Categories")} />
			</View>
		</ScrollView>
	);
}

export default HomeScreen;
