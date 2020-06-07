import React from "react";
import { useForm } from "../../hooks/useForm";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../actions";

function AddTodoModal({ close }) {
  const [todo, change, reset] = useForm({
    id: uuidv4(),
    title: "",
    done: false,
    deadline: "",
  });

  console.log("ADD MODAL RENDER");

  function handleCLose() {
    close();
  }

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(todo);
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
                  value={todo.title}
                  required
                />
                <label htmlFor="title">
                  <span className="content">Title</span>
                </label>
                <i className="fas fa-tasks"></i>
              </div>
              <div className="input-wrap">
                <input type="date" name="deadline" required onChange={change} />
                <label htmlFor="deadline">
                  <span className="content"></span>
                </label>
                <i className="fas fa-history"></i>
              </div>
              <div className="login-footer">
                <input type="submit" value="Add" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodoModal;
