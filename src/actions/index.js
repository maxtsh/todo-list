// Get all todos
export function getTodos() {
  let todos;
  if (JSON.parse(localStorage.getItem("todos"))) {
    todos = JSON.parse(localStorage.getItem("todos"));
  } else {
    todos = [];
  }

  return todos;
}

// Add new todo
export function addTodo(todo) {
  checkDate(todo.deadline);

  if (JSON.parse(localStorage.getItem("todos"))) {
    let todos = JSON.parse(localStorage.getItem("todos"));
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
  } else {
    localStorage.setItem("todos", JSON.stringify([todo]));
  }
}

// Edit a todo
export function editTodo(newTodo) {
  checkDate(newTodo.deadline);

  const todos = JSON.parse(localStorage.getItem("todos"));
  const oldTodo = todos.find((todo) => todo.id === newTodo.id);

  oldTodo.title = newTodo.title;
  oldTodo.deadline = newTodo.deadline;

  localStorage.setItem("todos", JSON.stringify(todos));
}

// Delete a todo
export function deleteTodo(todoId) {
  const todos = JSON.parse(localStorage.getItem("todos"));
  const resultArr = todos.filter((todo) => todo.id !== todoId);
  localStorage.setItem("todos", JSON.stringify(resultArr));
}

// Check or Uncheck a todo
export function setDone(todoId) {
  const todos = JSON.parse(localStorage.getItem("todos"));
  const selectedTodo = todos.find((todo) => todo.id === todoId);

  selectedTodo.done ? (selectedTodo.done = false) : (selectedTodo.done = true);

  localStorage.setItem("todos", JSON.stringify(todos));
}

function checkDate(todoDate) {
  const time = new Date(todoDate);
  if (time.getTime() <= Date.now())
    throw new Error("You can't choose from past times");
}
