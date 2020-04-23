import React from "react";

class DetailScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
             <Text>Detail Screen</Text>
             <Button title="Go to Home" onPress={() => this.props.navigation.navigate("Home")} />
            </View>
        );
    }
}

export default DetailScreen;