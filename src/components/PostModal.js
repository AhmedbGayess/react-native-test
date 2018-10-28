import React from "react";
import Modal from "react-native-modal";
import { Text, View, TouchableOpacity, Button } from "react-native";
import PostForm from "./PostForm";

const PostModal = (props) => (
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
            <PostForm
                toggleModal={props.toggleModal}
            />
        </View>
    </Modal>
);

export default PostModal;