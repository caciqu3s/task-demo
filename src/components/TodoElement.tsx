import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Todo } from '../models/Todo';
import CheckBox from './CheckBox';
import { useDispatch } from 'react-redux';

type TodoProps = {
    todo: Todo
}

const TodoElement = ({todo}: TodoProps) => {
    const [checked, setChecked] = useState<boolean>(todo.done);
    const dispatch = useDispatch();
    
    const checkPress = () => {
        dispatch({ type: 'CHANGE_CHECK_TODO', payload: todo });
    }

    const createTodo = () => dispatch({ type: 'PUSH_TODO', payload: todo });

    return (
        <View style={styles.container}>
            <CheckBox checked={todo.done} onPress={() => checkPress()}/>
            
            <View style={styles.textContainer}>
                <Text>{todo.text}</Text>
                <Text>{todo.description}</Text> 
            </View>     
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    checker: {

    },
    textContainer: {
        flexDirection: 'column'
    },
    text: {

    },
    description: {

    }
});

export default TodoElement;