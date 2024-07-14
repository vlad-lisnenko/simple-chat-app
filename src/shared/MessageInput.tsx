import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import SendMessageButton from "./buttons/SendMessageButton";

interface MessageInputProps {
    onSend: (text: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({onSend}) => {
    const [text, setText] = useState('');

    const handleSend = () => {
        if (text.trim()) {
            onSend(text);
            setText('');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={setText}
                placeholder="Type a message"
            />
            <SendMessageButton onPress={handleSend} isDisabled={!text.trim()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        marginVertical: 10,
    },
    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        marginRight: 10,
    },
});
export default MessageInput;
