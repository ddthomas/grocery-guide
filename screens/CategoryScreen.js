import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Search from "../components/Search";

class DetailScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.props);
        let { categoryId } = this.props.route.params;
        return (
            <View>
                <Search />
                <View>
                    <Text>Category ID: {categoryId}</Text>
                    <Text>Questions / Items in this Grocercy Aisle</Text>
                    <Button title="My Question" onPress={() => this.props.navigation.navigate("Edu")} />
                </View>
            </View>
        );
    }
}

export default DetailScreen;
