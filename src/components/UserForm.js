import React from "react";
import { View, TextInput, Text, Button } from "react-native";
import { connect } from "react-redux";

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        }
        this.submitUser = this.submitUser.bind(this)
    }
    submitUser() {
        this.props.method({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            id: this.props.users.length + 1
        });
        this.props.toggleModal();
    }
    render() {
        return (
            <View>

                <Text>Sign In</Text>

                <Text>Name</Text>
                <TextInput
                    style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                    onChangeText={(name) => this.setState({ name })}
                />

                <Text>Email</Text>
                <TextInput
                    style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                    onChangeText={(email) => this.setState({ email })}
                />
                <Text>Password</Text>
                <TextInput
                    style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                    onChangeText={(password) => this.setState({ password })}
                />
                <Button
                    title="Submit"
                    onPress={this.submitUser}
                />

            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.usersObject.users
});

export default connect(mapStateToProps)(UserForm);