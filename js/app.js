import { addTodo } from './components/todoForm.js';
import { renderTodoList } from './components/todoList.js';
import { editTodo } from './components/editTodo.js';

document.getElementById('todoForm').addEventListener('submit', addTodo);

renderTodoList();