import React, { useState, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { editTodo } from "../../actions";

function EditTodoModal({ close, oldTodo }) {
  const [errors, setErrors] = useState({ showError: false, message: "" });
  const [todo, change] = useForm({
    id: oldTodo.id,
    title: oldTodo.title,
    done: oldTodo.done,
    deadline: oldTodo.deadline,
  });

  useEffect(() => {
    let errorTimeout;
    if (errors.showError) {
      errorTimeout = setTimeout(() => {
        setErrors({ showError: false, message: "" });
      }, 5000);
    }

    return () => clearTimeout(errorTimeout);
  }, [errors]);

  function handleCLose() {
    close();
  }

  function handleSubmit(e) {
    e.preventDefault();
    try {
      editTodo(todo);
      window.location.reload();
    } catch (err) {
      setErrors({ showError: true, message: err.message });
    }
  }

  return (
    <>
      <div className="overlay"></div>
      <div className="modal-container">
        <div className="modal-wrapper">
          <div className="modal-header">
            <h1 className="modal-header-title">Add a new task:</h1>
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
                <i className="fas fa-history"></i>
              </div>
              <div className="login-footer">
                <input type="submit" value="Edit" />
              </div>
            </form>
            {errors.showError ? (
              <p className="modal-body-error">{errors.message}</p>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default EditTodoModal;
