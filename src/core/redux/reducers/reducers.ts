import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Chat, ChatState, initialChatState, Message, User} from "../../../types/types";
import {DEFAULT_USER} from "../../../../contstants";

const initialState: ChatState = initialChatState;

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        createChat: (state, action: PayloadAction<Chat>) => {
            state.chats.push(action.payload);
        },
        addMessage: (state, action: PayloadAction<{ chatId: number; message: Message }>) => {
            const currentChat = state.chats.findIndex(chat => chat.id === action.payload.chatId);
            if (currentChat !== -1) {
                state.chats[currentChat].messages.push(action.payload.message);
            }
        },
        deleteChat: (state, action: PayloadAction<number>) => {
            const chatToDelete = state.chats.find(chat => chat.id === action.payload);

            if (chatToDelete && userCanDeleteChat(chatToDelete, DEFAULT_USER)) {
                state.chats = state.chats.filter(chat => chat.id !== chatToDelete.id);
                alert(`Chat with title "${chatToDelete.title}" deleted!`);
            } else {
                alert(`You can not delete this chat!`);
            }
        },
    },
});

const userCanDeleteChat = (chat: Chat, user: User) => {
    return chat.createdBy.id === user.id;
}

export const {createChat, deleteChat, addMessage} = chatSlice.actions;
export default chatSlice.reducer;
