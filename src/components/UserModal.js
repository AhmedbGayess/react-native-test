import React from "react";
import Modal from "react-native-modal";
import { Text, View, TouchableOpacity, Button } from "react-native";
import UserForm from "./UserForm";

const UserModal = (props) => (
    <Modal
        isVisible={props.isVisible}
        backdropColor="#fff"
        backdropOpacity={1}
    >
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={props.toggleModal}>
                <Text>X</Text>
            </TouchableOpacity>
            <Text>{props.title}</Text>
            <UserForm title={props.title}/>
        </View>
    </Modal>
);

export default UserModal;