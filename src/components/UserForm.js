import React from "react";
import { View, TextInput, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { addUser } from "../actions/users";
import { login } from "../actions/auth";

class UserForm extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                name: "",
                email: "",
                password: ""
            }
            this.submitUser = this.submitUser.bind(this);
            this.handleSignin = this.handleSignin.bind(this);
        }
    
        handleSignin(user) {
            this.props.addUser(user);
            this.props.login(user);
        }
    
        submitUser() {
            this.handleSignin({
                name: this.state.name,
                password: this.state.password,
                id: this.props.users[this.props.users.length - 1] + 1
            });
            this.props.toggleModal();
        }

        render() {
            return (
                <View style={styles.container}>

                    <Text style={styles.header}>Sign In</Text>

                    <Text>Name</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(name) => this.setState({ name })}
                    />

                    <Text>Password</Text>

                    <TextInput
                        style={styles.input}
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

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "#eee",
        borderColor: "#000",
        borderWidth: 1
    },
    header: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "800",
        margin: 10
    },
    input: {
        margin: 10,
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        backgroundColor: "#fff"
    }
});

const mapStateToProps = (state) => ({
    users: state.usersObject.users,
    loggedIn: state.auth.id
});

const mapDispatchToProps = (dispatch) => ({
    addUser: (user) => dispatch(addUser(user)),
    login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);