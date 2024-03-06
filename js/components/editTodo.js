import { renderTodoList } from './todoList.js';


function editTodo(todoToEdit) {
  
  const titleInput = document.getElementById('title');
  const descriptionInput = document.getElementById('description');
  const dueDateInput = document.getElementById('dueDate');
  const priorityInput = document.getElementById('priority');

  titleInput.value = todoToEdit.title;
  descriptionInput.value = todoToEdit.description;
  dueDateInput.value = todoToEdit.dueDate;
  priorityInput.value = todoToEdit.priority;

  const submitButton = document.querySelector('button[type="submit"]');
  submitButton.textContent = "Enregistrer";

  document.getElementById('todoForm').removeEventListener('submit', addTodo);
  document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    todoToEdit.title = titleInput.value;
    todoToEdit.description = descriptionInput.value;
    todoToEdit.dueDate = dueDateInput.value;
    todoToEdit.priority = priorityInput.value;

    renderTodoList();

    submitButton.textContent = "Ajouter";
    document.getElementById('todoForm').removeEventListener('submit', editTodo);
    document.getElementById('todoForm').addEventListener('submit', addTodo);
    this.reset();
  });
}

export { editTodo };