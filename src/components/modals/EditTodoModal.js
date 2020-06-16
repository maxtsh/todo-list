import React, { useState, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { editTodo } from "../../actions";
import Popup from "../notification/Popup";

function EditTodoModal({ reload, reloadValue, setModal, oldTodo }) {
  const [popup, setPopup] = useState({ show: false, type: "", message: "" });
  const [todo, change] = useForm({
    id: oldTodo.id,
    title: oldTodo.title,
    done: oldTodo.done,
    deadline: oldTodo.deadline,
  });

  useEffect(() => {
    let errorTimeout;
    if (popup.show) {
      errorTimeout = setTimeout(() => {
        setPopup({ show: false, message: "" });
      }, 5000);
    }

    return () => clearTimeout(errorTimeout);
  }, [popup]);

  function handleCLose() {
    setModal(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    try {
      editTodo(todo);
      setPopup({
        show: true,
        type: "success",
        message: "Successfully updated",
      });
      reload(!reloadValue);
    } catch (err) {
      setPopup({ show: true, type: "error", message: err.message });
    }
  }

  return (
    <>
      {popup.show ? <Popup message={popup.message} type={popup.type} /> : null}
      {/* <div className="overlay"></div> */}
      <div className="modal-container">
        <div className="modal-wrapper">
          <div className="modal-header">
            <h1 className="modal-header-title">Edit this task:</h1>
            <i className="far fa-times-circle" onClick={handleCLose}></i>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="input-wrap">
                <input
                  type="text"
                  name="title"
                  onChange={change}
                  value={todo.title}
                  required
                />
                <label htmlFor="title">
                  <span className="content">Title</span>
                </label>
                <i className="fas fa-tasks"></i>
              </div>
              <div className="input-wrap">
                <input
                  type="date"
                  name="deadline"
                  value={todo.deadline}
                  required
                  onChange={change}
                />
                <label htmlFor="deadline">
                  <span className="content"></span>
                </label>
              </div>
              <div className="login-footer">
                <input type="submit" value="Edit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditTodoModal;
