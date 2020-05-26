import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import { Feather } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import CategoryScreen from "./screens/CategoryScreen";
import EduContent from "./screens/EduContent";

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Grocery Guide" component={HomeScreen} />
				<Stack.Screen name="Category" component={CategoryScreen} />
				<Stack.Screen name="Edu" component={EduContent} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
