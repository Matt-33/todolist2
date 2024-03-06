import { editTodo } from './editTodo.js';

let todos = [];

function renderTodoList() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    
    todos.forEach(todo => {
      const listItem = document.createElement('li');
      const titleSpan = document.createElement('span');
      titleSpan.textContent = todo.title + " - " + todo.dueDate;
  
      const editButton = document.createElement('button');
      editButton.textContent = 'Editer';
      editButton.addEventListener('click', () => editTodo(todo.id));
  
      listItem.appendChild(titleSpan);
      listItem.appendChild(editButton);
  
      todoList.appendChild(listItem);
    });
  }

export { renderTodoList };
