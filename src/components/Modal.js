import React from "react";
import Modal from "react-native-modal";
import { Text, View, TouchableOpacity } from "react-native";

const UserModal = (props) => (
    <Modal
        isVisible={props.isVisible}
        backdropColor="#fff"
        backdropOpacity={0.8}
        avoidKeyboard={true}
    >
        <View>
            <TouchableOpacity onPress={props.toggleModal}>
                <Text style={{ textAlign: "right" }}>X</Text>
            </TouchableOpacity>
            <Text>{props.title}</Text>
            <props.form
                toggleModal={props.toggleModal}
            />
        </View>
    </Modal>
);

export default UserModal;