import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Message} from "../types/types";
import {DEFAULT_USER} from "../../contstants";

interface MessageProps {
    message: Message;
}

const MessageItem: React.FC<MessageProps> = ({message}) => {
    const isMyMessage = (message: Message) => {
        return message.user.id === DEFAULT_USER.id;
    }

    return (
        <View
            style={[styles.messageContainer, isMyMessage(message) ? styles.myMessage : styles.otherMessage]}>
            <Text style={styles.messageAuthor}>{message.user.username}</Text>
            <Text style={styles.messageText}>{message.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    messageContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        alignSelf: 'flex-end',
        maxWidth: '80%',
    },
    myMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#ffffff',
    },
    otherMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#e1e1e1',
    },
    messageAuthor: {
        fontSize: 14,
        fontWeight: "300",
        color: "#76acec"
    },
    messageText: {
        fontSize: 16,
    },
});
export default MessageItem;
