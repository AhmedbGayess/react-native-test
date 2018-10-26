import React from "react";
import { View, TextInput, Text, Button } from "react-native";

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            body: ""
        }
    }
    render() {
        return (
            <View>
                <Text>Your name</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    value={this.state.name}
                    onChangeText={(text) => this.setState({name: text})}                    
                />
                <Text>{this.props.inputTitle}</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    value={this.state.body}
                    onChangeText={(text) => this.setState({body: text})}
                />
                <Button
                    title="Post"
                    onPress={() => {
                        this.props.handlePost({
                            name: this.state.name,
                            body: this.state.body
                        });
                    }}
                />
            </View>
        );
    }
}

export default Form;