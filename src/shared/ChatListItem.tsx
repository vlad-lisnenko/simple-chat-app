import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Chat} from '../types/types';
import {useDispatch} from "react-redux";
import {deleteChat} from "../core/redux/reducers/reducers";
import DeleteChatButton from "./buttons/DeleteChatButton";

interface ChatListItemProps {
    chat: Chat;
    onPress: () => void;
}

const ChatListItem: React.FC<ChatListItemProps> = ({chat, onPress, }) => {
    const dispatch  = useDispatch();

    const handleDeleteChat = (id: number) => {
        dispatch(deleteChat(id));
    };

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.title}>{chat.title}</Text>
                <DeleteChatButton onPress={() => handleDeleteChat(chat.id)} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    title: {
        fontSize: 18,
    },
});

export default ChatListItem;
