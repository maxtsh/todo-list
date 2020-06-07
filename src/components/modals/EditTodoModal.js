import React from "react";
import { useForm } from "../../hooks/useForm";
import { editTodo } from "../../actions";

function EditTodoModal({ close, oldTodo }) {
  const [todo, change, reset] = useForm({
    title: "",
    done: false,
    deadline: "",
  });

  function handleCLose() {
    close();
  }

  function handleSubmit(e) {
    e.preventDefault();
    editTodo(todo);
    reset();
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
                  value={oldTodo.title}
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
                  value={oldTodo.deadline}
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
          </div>
        </div>
      </div>
    </>
  );
}

export default EditTodoModal;
