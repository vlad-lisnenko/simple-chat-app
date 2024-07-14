import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface CreateChatButtonProps {
    onPress: () => void,
}

const CreateChatButton: React.FC<CreateChatButtonProps> = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <AntDesign style={styles.createButton} name="pluscircle" size={48} color="black" />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 10,
        right: 10,
    },
    createButton: {
        color: "#005eff"
    }
});

export default CreateChatButton;