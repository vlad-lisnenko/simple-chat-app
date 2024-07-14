export interface User {
    id: number,
    username: string
}

export interface Message {
    id: number,
    user: User;
    text: string;
    chatId: number
}

export interface Chat {
    id: number;
    title: string;
    messages: Message[];
    createdBy: User;
}

export interface ChatState {
    chats: Chat[];
    loading: boolean;
    error: string | null;
}

export const initialChatState: ChatState = {
    chats: [
        {
            id: 1,
            title: 'First Chat',
            messages: [
                {id: 1, user: {id: 1, username: 'User1'}, text: 'Hello everyone!', chatId: 1},
                {
                    id: 2,
                    user: {id: 2, username: 'User2'},
                    text: 'Hi User1, how are you?',
                    chatId: 1
                },
                {id: 3, user: {id: 1, username: 'User1'}, text: 'I am good, thanks!', chatId: 1}
            ],
            createdBy: {id: 1, username: 'User1'}
        },
        {
            id: 2,
            title: 'Second Chat',
            messages: [
                {
                    id: 1,
                    user: {id: 2, username: 'User2'},
                    text: 'Welcome to the second chat!',
                    chatId: 2
                },
                {
                    id: 2,
                    user: {id: 3, username: 'User3'},
                    text: 'Hello everyone, nice to be here.',
                    chatId: 2
                },
                {
                    id: 3,
                    user: {id: 2, username: 'User2'},
                    text: 'Let’s discuss our project here.',
                    chatId: 2
                }
            ],
            createdBy: {id: 2, username: 'User2'}
        },
        {
            id: 3,
            title: 'Third Chat',
            messages: [
                {id: 1, user: {id: 3, username: 'User3'}, text: 'Good morning!', chatId: 3},
                {id: 2, user: {id: 1, username: 'User1'}, text: 'Good morning, User3!', chatId: 3},
                {
                    id: 3,
                    user: {id: 3, username: 'User3'},
                    text: 'How is everyone doing today?',
                    chatId: 3
                }
            ],
            createdBy: {id: 3, username: 'User3'}
        }
    ],
    loading: false,
    error: null
};