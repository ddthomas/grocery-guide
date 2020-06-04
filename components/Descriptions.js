import React from "react";
import { StyleSheet, Text, View } from "react-native";



function Description ({ _id, text }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "left", padding: 15 }}>
			<Text>
				{text}
            </Text>
		</View>
	);
}

export default function Descriptions({ data }) {
	const description = data;
	return <Description key={description._id}{...description} />
};

// export default function Categories({ data }) {
// 	const categories = data;
// 	return categories.map((category) => {
// 		return <Category key={category._id} {...category} />;
// 	});
// }