import { TodoState } from "../models/TodoState";
import { Todo } from "../models/Todo";

export const editTodo = (state: TodoState, payload: Todo): TodoState => {
    return { ...state, data: state.data.map(todo => todo.id === payload.id ? payload : todo) }
}

export const changeDoneTodo = (state: TodoState, payload: Todo) => {
    payload.done = !payload.done;

    return editTodo(state, payload);
}

export const addTodo = (state: TodoState, payload: Todo): TodoState => {
    return { ...state, data: [...state.data, payload] };
}