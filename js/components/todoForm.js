import { renderTodoList } from './todoList.js';
import { editTodo } from './editTodo.js';

function addTodo(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;

    const todo = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority
      };

      console.log(todo);

      alert('Todo ajoutée avec succès');
      event.target.reset();
      renderTodoList();
    }

    export { addTodo };