import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../core/redux/store";
import MessageInput from "../shared/MessageInput";
import {addMessage} from "../core/redux/reducers/reducers";
import {Message} from "../types/types";
import {RootStackParamList} from "../../App";
import MessageItem from "../shared/MessageItem";
import {DEFAULT_USER} from "../../contstants";

type ChatScreenRouteProp = RouteProp<RootStackParamList, 'Chat'>;

interface ChatScreenProps {
}

const ChatScreen: React.FC<ChatScreenProps> = () => {
    const route = useRoute<ChatScreenRouteProp>();
    const {chatId} = route.params;
    const [messages, setMessages] = useState<Message[]>([]);
    const dispatch = useDispatch();
    const chats = useSelector((state: RootState) => state.chat.chats);

    useEffect(() => {
        const currentChat = chats.find(chat => chat.id === chatId);
        if (currentChat) {
            setMessages(currentChat.messages);
        }

        // There is at least 1 websocket connection;
        const socket = new WebSocket('ws://your-websocket-server-url');

        socket.onopen = () => {
            console.log('WebSocket connected');
        };

        socket.onmessage = (event) => {
            const message: Message = JSON.parse(event.data);
            if (message.chatId === chatId) {
                setMessages(prevMessages => [...prevMessages, message]);
                dispatch(addMessage({ chatId, message }));
            }
        };

        socket.onerror = (error) => {
            console.log('WebSocket error:', error);
        };

        socket.onclose = () => {
            console.log('WebSocket disconnected');
        };

        return () => {
            socket.close();
        };
    }, [chatId]);

    const sendMessage = (text: string) => {
        const message: Message = {
            id: new Date().getTime(),
            user: DEFAULT_USER,
            text,
            chatId
        };
        setMessages(prevMessages => [...prevMessages, message]);
        dispatch(addMessage({ chatId, message }));


        const socket = new WebSocket('ws://your-websocket-server-url');
        socket.onopen = () => {
            socket.send(JSON.stringify(message));
        };
    };
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.messagesList}
                data={messages}
                renderItem={({item}) => <MessageItem message={item}/>}
                keyExtractor={(item) => item.id.toString()}
            />
            <MessageInput onSend={sendMessage}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#f0f0f0',
    },
    messagesList: {
        flex: 1,
        marginBottom: 10,
    },
});


export default ChatScreen;
