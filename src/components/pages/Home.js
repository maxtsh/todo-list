import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";

// React-Redux
import { getTodos, clearGetTodos } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

// Components
import Modal from "../layouts/Modal";

function Home() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [modal, setModal] = useState(false);

  console.log(todos);
  console.log("HOME RENDER");

  useEffect(() => {
    getTodos(dispatch);

    return () => clearGetTodos(dispatch);
  }, [dispatch]);

  function toggleModal() {
    setModal(!modal);
  }

  if (!todos.data || todos.loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container">
      <div className="wrapper">
        <div className="calendar-container">
          <div className="calendar-body">
            <Calendar calendarType="ISO 8601" />
          </div>
        </div>
        <div className="todo-container">
          <div className="todo-wrapper">
            <div className="todo-header">
              <div className="todo-header-options">
                <div className="todo-header-options-cog">
                  <img
                    className="todo-header-options-cog-img"
                    src={require("../../assets/images/cog.svg")}
                    alt=""
                  />
                </div>
                <div className="todo-header-options-bell">
                  <div className="todo-header-options-bell-dot"></div>
                  <img
                    className="todo-header-options-bell-img"
                    src={require("../../assets/images/bell.svg")}
                    alt=""
                  />
                </div>
              </div>
              <div className="todo-header-avatar">
                <img
                  className="todo-header-avatar-img"
                  src={require("../../assets/images/avatar.jpg")}
                  alt=""
                />
              </div>
            </div>
            <div className="todo-intro">
              <h2 className="todo-intro-title">Hello, Max</h2>
              <p className="todo-intro-text">These are your tasks for today.</p>
            </div>
            <div className="todo-body">
              {todos.data.length !== 0 ? (
                todos.data.map((todo) => (
                  <div key={todo.id} className="todo-body-item">
                    <div className="todo-body-item-header">
                      <div className="todo-body-item-header-main">
                        <form className="todo-body-item-header-main-form">
                          <input
                            className="todo-body-item-header-main-form-input"
                            type="checkbox"
                            name="done"
                          />
                        </form>
                        <h4 className="todo-body-item-header-main-title">
                          {todo.title}
                        </h4>
                      </div>
                      <div className="todo-body-item-header-options">
                        <i className="fas fa-ellipsis-h"></i>
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
                <h1 className="todo-body-notask">
                  {" "}
                  There are no tasks available now.
                </h1>
              )}
            </div>
            <div className="todo-add">
              <button className="todo-add-btn" onClick={toggleModal}>
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <img
        className="snow-ground-img"
        src={require("../../assets/images/winter-ground.png")}
        alt=""
      />

      {modal ? <Modal close={toggleModal} /> : null}

      <div className="snow-layer">
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
        <div className="snow">❄</div>
      </div>
    </div>
  );
}

export default Home;
