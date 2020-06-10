// Get all todos
export function getTodos(date) {
  // Geting the requested date
  const time = new Date(date);

  // Seprating day, month and year of the requested date
  const day = time.getDate();
  const month = time.getMonth() + 1;
  const year = time.getFullYear();

  // Changing the requested format to standart date format
  const standardFormat = `${year}-${String(month).padStart(2, 0)}-${String(
    day
  ).padStart(2, 0)}`;

  // Fetching the todos with respect to their requested date
  let todos;
  if (JSON.parse(localStorage.getItem("todos"))) {
    todos = JSON.parse(localStorage.getItem("todos")).filter(
      (todo) => todo.deadline === standardFormat
    );
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
    throw new Error("Your time is in the past!");
}
