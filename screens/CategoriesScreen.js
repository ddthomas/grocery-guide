import React from "react";
import { StyleSheet, ScrollView, Text, View, Button } from "react-native";

class CategoriesScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text>Categories Screen</Text>
                    <Button title="Go to Home" onPress={() => this.props.navigation.navigate("Home")} />
                </View>
            </ScrollView>
        );
    }
}

export default CategoriesScreen;
