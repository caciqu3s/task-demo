import React, { useState } from 'react';
import { View, Modal, SafeAreaView, TextInput, Button } from 'react-native';
import { Todo } from '../models/Todo';
import { useDispatch } from 'react-redux';

type CreateTodoModalProps = {
    visible: boolean,
    onRequestClose: (() => void)
}

const CreateTodoModal = ({visible, onRequestClose}: CreateTodoModalProps) => {
    const [text, setText] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const dispatch = useDispatch();

    const createTodo = () => {
        dispatch({ type: 'ADD_TODO', payload: new Todo(text, description) });
        onRequestClose();
    }

    return (
        <Modal
            presentationStyle="pageSheet"
            animationType="slide"
            transparent={false}
            visible={visible}
            onRequestClose={onRequestClose}
        >
            <SafeAreaView>
                <TextInput placeholder="Type your task" value={text} onChangeText={e => setText(e)} />
                <TextInput placeholder="Type a description to your task" value={description} onChangeText={e => setDescription(e)}/>
                <Button title="Create" onPress={createTodo}></Button>
                <Button title="cancel" onPress={onRequestClose}></Button>
            </SafeAreaView>
        </Modal>
    );
}

export default CreateTodoModal;