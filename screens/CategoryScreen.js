import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Search from "../components/Search";

class DetailScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Search />
                <View>
                    <Text></Text>
                    <Text>Questions / Items in this Grocercy Aisle</Text>
                    <Button title="My Question" onPress={() => this.props.navigation.navigate("Edu")} />
                </View>
            </View>
        );
    }
}

export default DetailScreen;