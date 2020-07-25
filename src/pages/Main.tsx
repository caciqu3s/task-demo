import React, { useState } from 'react';
import { FlatList, Button, Modal, Alert, Text, SafeAreaView, TextInput } from 'react-native';
import TodoElement from '../components/TodoElement';
import { useSelector, useDispatch } from 'react-redux';
import { Todo } from '../models/Todo';
import { TodoState } from '../models/TodoState';
import CreateTodoModal from '../components/CreateTodoModal';

const Main = () => {
  const [modal, setModal] = useState<boolean>(false);
  const todos: Todo[] = useSelector((state: TodoState) => state.data);
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch({ type: 'ADD_TODO', payload: new Todo('teste2')})
  }

  return (
      <SafeAreaView>
        <FlatList 
          data={todos}
          renderItem={({ item }) => <TodoElement todo={item} /> }
          keyExtractor={item => item.id}
        />
        <CreateTodoModal
          visible={modal}
          onRequestClose={() => setModal(false)}
        />
        <Button title="Create Todo" onPress={() => setModal(!modal)} />
      </SafeAreaView>
  );
}

export default Main;