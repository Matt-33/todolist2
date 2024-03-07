import { addTodo } from './components/todoForm.js';
import { renderTodoList } from './components/todoList.js';
import { editTodo } from './components/editTodo.js';
import { deleteTodo } from './components/deleteTodo.js';


let todos = JSON.parse(localStorage.getItem('todos')) || [];

document.getElementById('todoForm').addEventListener('submit', addTodo);

renderTodoList();

export { todos };