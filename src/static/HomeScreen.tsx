import React, {useState} from 'react';
import {Button, Modal, StyleSheet, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../core/redux/store';
import ChatList from "../shared/ChatList";
import {createChat} from "../core/redux/reducers/reducers";
import {DEFAULT_USER_ID, DEFAULT_USERNAME} from "../../contstants";
import CreateChatButton from "../shared/buttons/CreateChatButton";

const HomeScreen: React.FC = () => {
    const dispatch = useDispatch();
    const chats = useSelector((state: RootState) => state.chat.chats);
    const [modalVisible, setModalVisible] = useState(false);
    const [chatTitle, setChatTitle] = useState('');

    const handleCreateChat = () => {
        setModalVisible(true);
    };

    const handleConfirmCreateChat = () => {
        if (chatTitle.trim() !== '') {
            dispatch(
                createChat({
                    id: new Date().getTime(),
                    title: chatTitle,
                    createdBy: {id: DEFAULT_USER_ID, username: DEFAULT_USERNAME},
                    messages: []
                })
            );
            setChatTitle('');
            setModalVisible(false);
        }
    };


    return (
        <View style={styles.container}>
            <ChatList chats={chats}/>
            <CreateChatButton onPress={handleCreateChat}/>

            <Modal animationType={"slide"}
                   transparent={true}
                   visible={modalVisible}
                   onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter chat title"
                            value={chatTitle}
                            onChangeText={text => setChatTitle(text)}
                        />
                        <Button title="Create" onPress={handleConfirmCreateChat}/>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        minWidth: 300,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default HomeScreen;
