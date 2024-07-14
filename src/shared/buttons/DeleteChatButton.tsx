import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {AntDesign} from "@expo/vector-icons";

interface DeleteChatButtonProps {
    onPress: () => void;
}

const DeleteChatButton: React.FC<DeleteChatButtonProps> = ({onPress}) => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <AntDesign style={styles.buttonIcon} name="delete" size={20}/>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        padding: 4
    },
    buttonIcon: {
        color: 'red',
    },
});

export default DeleteChatButton;