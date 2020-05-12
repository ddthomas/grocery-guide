import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

export default function SearchInput(props) {
	const [value, onChangeText] = React.useState("Search...");
	return (
		<View>
			<TextInput
				style={{
					height: 40,
					borderColor: "gray",
					borderWidth: 1,
				}}
				{...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
				editable
				onChangeText={(text) => onChangeText(text)}
				value={value}
			/>
		</View>
	);
}
