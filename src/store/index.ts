import { createStore } from 'redux';
import { TodoState } from '../models/TodoState';
import { editTodo, addTodo, changeDoneTodo } from './actions';
import { Todo } from '../models/Todo';

const INITIAL_STATE: TodoState = {
    data: []
}
const todo = (state: TodoState = INITIAL_STATE, action: { type: any; payload: any; }): TodoState => {
    switch(action.type) {
        case 'ADD_TODO':
            return addTodo(state, action.payload);
        
        case 'CHANGE_CHECK_TODO': 
            return changeDoneTodo(state, action.payload);

        case 'EDIT_TODO':
            return editTodo(state, action.payload);

        default:
            return state;
    }
}

const store = createStore(todo);

export default store;