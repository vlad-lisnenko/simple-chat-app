import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Feather} from "@expo/vector-icons";

interface SendMessageButtonProps {
    onPress: () => void;
    isDisabled: boolean
}

const SendMessageButton: React.FC<SendMessageButtonProps> = ({onPress, isDisabled}) => (
    <TouchableOpacity onPress={onPress} style={styles.button} disabled={isDisabled}>
        <Feather style={styles.buttonIcon} name="send" size={28} />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonIcon: {
        color: '#005eff',
    },
});

export default SendMessageButton;
