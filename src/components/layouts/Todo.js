import React, { useState, useEffect } from "react";
import EditTodoModal from "../modals/EditTodoModal";
import { setDone, deleteTodo } from "../../actions/index";
import Popup from "../notification/Popup";

function Todo({ todo, reload, reloadValue }) {
  const [popup, setPopup] = useState({ show: false, type: "", message: "" });
  const [modal, setModal] = useState(false);
  const [optionModal, setOptionModal] = useState({ show: false, todoId: "" });

  console.log("TODO RENDER");

  useEffect(() => {
    let popupTimeout;
    if (popup.show) {
      popupTimeout = setTimeout(() => {
        setPopup({ show: false, type: "", message: "" });
      }, 5000);
    }

    return () => clearTimeout(popupTimeout);
  }, [popup]);

  function handleOptions(todoId) {
    setOptionModal({ show: !optionModal.show, todoId });
  }

  function handleDoneChange(todoId) {
    setDone(todoId);
    reload(!reloadValue);
  }

  function handleEdit() {
    setModal(true);
    setOptionModal({ ...optionModal, show: false });
  }

  function handleDelete(todoId) {
    deleteTodo(todoId);
    setPopup({
      show: true,
      type: "success",
      message: "Successfully deleted",
    });
    reload(!reloadValue);
  }

  return (
    <>
      {popup.show ? <Popup message={popup.message} type={popup.type} /> : null}
      <div key={todo.id} className="todo-body-item">
        {optionModal.show ? (
          <div className="todo-body-item-options">
            <div className="arrow"></div>
            <div className="todo-body-item-options-edit" onClick={handleEdit}>
              <p className="todo-body-item-options-edit-text">Edit</p>
              <i className="far fa-edit"></i>
            </div>
            <div
              className="todo-body-item-options-delete"
              onClick={() => handleDelete(todo.id)}
            >
              <p className="todo-body-item-options-delete-text">Delete</p>
              <i className="far fa-trash-alt"></i>
            </div>
          </div>
        ) : null}

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
              style={todo.done ? { textDecoration: "line-through" } : null}
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
      {modal ? (
        <EditTodoModal
          reload={reload}
          reloadValue={reloadValue}
          setModal={setModal}
          oldTodo={todo}
        />
      ) : null}
    </>
  );
}

export default React.memo(Todo);
