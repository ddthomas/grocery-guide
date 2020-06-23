import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Search from "../components/Search";
import Questions from "../components/Questions";
import API from "../libs/api";

const api = API({});

class CategoryScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        console.log(this.props);
        let { category } = this.props.route.params;
        const questions = api.getByCategory({ key: "eduContent", category: category });

        return (
            <View>
                <Search />
                <View>
                    <Text>Category: {category}</Text>
                    <Text>Questions / Items in this Grocercy Aisle</Text>
                    <Questions data={questions} />
                </View>
            </View>
        );
    }
}

export default CategoryScreen;
