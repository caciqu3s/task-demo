import { Todo } from "./Todo";

export class TodoAction {
    type!: 'ADD_TODO' | 'CHANGE_CHECK_TODO' | 'EDIT_TODO' | 'DELETE_TODO';
    payload!: Todo;
}