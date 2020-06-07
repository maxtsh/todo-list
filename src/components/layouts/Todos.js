import React, { useState } from "react";
import { getTodos, setDone } from "../../actions/index";

function Todos() {
  const [updateComponent, setUpdateComponent] = useState(false);
  const [optionModal, setOptionModal] = useState({ show: false, todoId: "" });
  const todos = getTodos();

  function handleOptions(todoId) {
    setOptionModal({ show: true, todoId });
  }

  function handleDoneChange(todoId) {
    setUpdateComponent(!updateComponent);
    setDone(todoId);
  }

  return (
    <div className="todo-body">
      {todos.length !== 0 ? (
        todos
          .slice(0)
          .reverse()
          .map((todo) => (
            <div key={todo.id} className="todo-body-item">
              <div className="todo-body-item-header">
                <div className="todo-body-item-header-main">
                  <form className="todo-body-item-header-main-form">
                    <label
                      className="todo-body-item-header-main-form-label"
                      htmlFor="done"
                      onClick={() => handleDoneChange(todo.id)}
                    >
                      {todo.done ? (
                        <i className="fas fa-check-square"></i>
                      ) : (
                        <i className="far fa-square"></i>
                      )}
                    </label>
                    <input
                      className="todo-body-item-header-main-form-input"
                      type="checkbox"
                      name="done"
                      onChange={() => handleDoneChange(todo.id)}
                    />
                  </form>
                  <h4
                    style={
                      todo.done ? { textDecoration: "line-through" } : null
                    }
                    className="todo-body-item-header-main-title"
                  >
                    {todo.title}
                  </h4>
                </div>
                <div className="todo-body-item-header-options">
                  <i
                    className="fas fa-ellipsis-h"
                    onClick={() => handleOptions(todo.id)}
                  ></i>
                </div>
              </div>
              <div className="todo-body-item-footer">
                <p className="todo-body-item-footer-text">
                  Due Date:{" "}
                  <span className="todo-body-item-footer-text-time">
                    {todo.deadline}
                  </span>
                </p>
              </div>
            </div>
          ))
      ) : (
        <h1 className="todo-body-notask"> There are no tasks available now.</h1>
      )}
    </div>
  );
}

export default React.memo(Todos);
