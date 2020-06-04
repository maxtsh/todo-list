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
  const selectedTodo = JSON.parse(localStorage.getItem("todos")).find(
    (todo) => todo.id === todoId
  );

  selectedTodo.done = true;

  JSON.parse(localStorage.getItem("todos")).splice();
}
