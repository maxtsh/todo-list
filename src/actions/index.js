import * as TYPES from "./Types";

export function getTodos(dispatch) {
  let todos;
  if (JSON.parse(localStorage.getItem("todos"))) {
    todos = JSON.parse(localStorage.getItem("todos"));
  } else {
    todos = [];
  }

  dispatch({
    type: TYPES.GET_TODOS,
    payload: todos,
  });
}

export function clearGetTodos(dispatch) {
  dispatch({
    type: TYPES.CLEAR_GET_TODOS,
  });
}

export function addTodo(dispatch, todo) {
  if (JSON.parse(localStorage.getItem("todos"))) {
    let todos = JSON.parse(localStorage.getItem("todos"));
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
  } else {
    localStorage.setItem("todos", JSON.stringify([todo]));
  }

  dispatch({
    type: TYPES.ADD_TODO,
  });
}
