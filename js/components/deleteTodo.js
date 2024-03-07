import { renderTodoList } from './todoList.js';
import { todos } from '../app.js'; 

function deleteTodo(todoToDelete) {
  const index = todos.findIndex(todo => todo === todoToDelete);

  if (index !== -1) {
    todos.splice(index, 1);
    renderTodoList(); 

    localStorage.setItem('todos', JSON.stringify(todos));
  }
}

export { deleteTodo };