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

  // Modification du texte du bouton "Ajouter" en "Enregistrer" pour indiquer l'édition
  const submitButton = document.querySelector('button[type="submit"]');
  submitButton.textContent = "Enregistrer";

  // Modification du gestionnaire d'événement du formulaire pour prendre en charge l'édition
  document.getElementById('todoForm').removeEventListener('submit', addTodo);
  document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Mise à jour des détails de la todo dans le tableau des todos
    todoToEdit.title = titleInput.value;
    todoToEdit.description = descriptionInput.value;
    todoToEdit.dueDate = dueDateInput.value;
    todoToEdit.priority = priorityInput.value;

    // Ré-affichage de la liste de todos après l'édition
    renderTodoList();

    // Réinitialisation du formulaire et restauration du bouton "Ajouter"
    submitButton.textContent = "Ajouter";
    document.getElementById('todoForm').removeEventListener('submit', editTodo);
    document.getElementById('todoForm').addEventListener('submit', addTodo);
    this.reset();
  });
}

export { editTodo };