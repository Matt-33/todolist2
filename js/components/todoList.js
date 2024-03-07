import { todos } from '../app.js';
import { editTodo } from './editTodo.js';
import { deleteTodo } from './deleteTodo.js';

function renderTodoList() {
  const todoList = document.getElementById('todoList');
  todoList.innerHTML = '';
  
  todos.forEach(todo => {
    const listItem = document.createElement('li');
    
    // éléments pour afficher les détails de la todo
    const titleSpan = document.createElement('span');
    const descriptionPara = document.createElement('p');
    const dueDateSpan = document.createElement('span');
    const prioritySpan = document.createElement('span');

    // Eléments avec les détails de la todo
    titleSpan.textContent = `Titre: ${todo.title}`;
    descriptionPara.textContent = `Description: ${todo.description}`;
    dueDateSpan.textContent = `Date d'échéance: ${todo.dueDate}`;
    prioritySpan.textContent = `Priorité: ${todo.priority}`;

    // boutons d'édition et de suppression
    const editButton = document.createElement('button');
    editButton.textContent = 'Modifier';
    editButton.addEventListener('click', () => editTodo(todo));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.addEventListener('click', () => deleteTodo(todo));

    listItem.appendChild(titleSpan);
    listItem.appendChild(descriptionPara);
    listItem.appendChild(dueDateSpan);
    listItem.appendChild(prioritySpan);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);
  });
}

export { renderTodoList };