import { renderTodoList } from './todoList.js';
import { editTodo } from './editTodo.js';
import { todos } from '../app.js';

function addTodo(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('dueDate').value;
  const priority = document.getElementById('priority').value;

  const todo = {
      id: Date.now(),
      title: title,
      description: description,
      dueDate: dueDate,
      priority: priority
    };

  todos.push(todo); 
  alert('Todo ajoutée avec succès');
  event.target.reset();
  renderTodoList(); 
  }
    export { addTodo };