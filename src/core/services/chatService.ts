import axios from 'axios';
import {Chat} from "../../types/types";

// for api requests (for each CRUD operation)

const API_URL = 'http://your-mock-server-url';

export const fetchChats = async () => {
    const response = await axios.get<Chat>(`${API_URL}/chats`);
    return response.data;
}

export const fetchChatById = async (id: number) => {
    const response = await axios.get<Chat>(`${API_URL}/chats/${id}`);
    return response.data;
}

export const createChat = async (chatData: Chat) => {
    const response = await axios.post(`${API_URL}/chats`, {chatData});
    return response.data;
}

export const updateChat = async (id: number, chatData: Chat) => {
    const response = await axios.patch(`${API_URL}/chats/${id}`, {chatData});
    return response.data;
}

export const deleteChat = async (id: number) => {
    const response = await axios.delete(`${API_URL}/chats/${id}`);
    return response.data;
}


