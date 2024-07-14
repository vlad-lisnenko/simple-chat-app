import React from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from "@react-navigation/stack";
import {Chat} from "../types/types";
import ChatListItem from "./ChatListItem";
import {RootStackParamList} from "../../App";

interface ChatListProps {
    chats: Chat[];
}

export type ChatScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Chat'>;

const ChatList: React.FC<ChatListProps> = ({chats}) => {
    const navigation = useNavigation<ChatScreenNavigationProp>();

    return (
        <FlatList
            style={{flex: 1}}
            data={chats}
            renderItem={({item}) => (
                <ChatListItem chat={item}
                              onPress={() => navigation.navigate("Chat", {
                                  chatId: item.id,
                                  title: item.title
                              })}
                />
            )}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};


export default ChatList;
