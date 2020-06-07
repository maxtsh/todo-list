export function getTodos() {
  let todos;
  if (JSON.parse(localStorage.getItem("todos"))) {
    todos = JSON.parse(localStorage.getItem("todos"));
  } else {
    todos = [];
  }

  return todos;
}

export function addTodo(todo) {
  if (JSON.parse(localStorage.getItem("todos"))) {
    let todos = JSON.parse(localStorage.getItem("todos"));
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
  } else {
    localStorage.setItem("todos", JSON.stringify([todo]));
  }
}

export function setDone(todoId) {
  const todos = JSON.parse(localStorage.getItem("todos"));
  const selectedTodo = todos.find((todo) => todo.id === todoId);

  selectedTodo.done ? (selectedTodo.done = false) : (selectedTodo.done = true);

  localStorage.setItem("todos", JSON.stringify(todos));
}
