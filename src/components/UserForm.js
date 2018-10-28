import React from "react";
import { View, TextInput, Text, Button } from "react-native";

class UserForm extends React.Component {
    render() {
        return (
            <View>
                {
                    this.props.title === "Sign in" && (
                        <View>
                            <Text>Name</Text>
                            <TextInput
                                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                            />
                        </View>

                    )
                }
                <Text>Email</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                />
                <Text>Password</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                />
                <Button title="Submit"/>

            </View>
        );
    }
}

export default UserForm;