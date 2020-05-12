import React from "react";
import { StyleSheet, ScrollView, Text, View, Button } from "react-native";
import styles from "../libs/styles";

class DetailScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ ...styles.container, ...styles.homeScreen }}>
                    <Text>Detail Screen</Text>
                    <Button title="Go to Home" onPress={() => this.props.navigation.navigate("Home")} />
                </View>
            </ScrollView>
        );
    }
}

export default DetailScreen;
