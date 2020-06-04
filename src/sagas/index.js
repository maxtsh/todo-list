import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as TYPES from "../actions/Types";

// Worker Sagas
function* handleGetTodos() {
  console.log("GETTING TODOS");
}

function* handleAddTodo() {
  console.log("Add Todo");
}

// Watcher Saga
function* rootSaga() {
  yield takeEvery(TYPES.GET_TODOS, handleGetTodos);
  yield takeEvery(TYPES.ADD_TODO, handleAddTodo);
}

// Watcher saga => Listens to actions => Worker saga

export default rootSaga;
