import React from "react";
import Calendar from "react-calendar";

const todos = [
  { title: "Fix my computer 1", id: 1, done: false },
  { title: "Fix my computer 2", id: 2, done: false },
  { title: "Fix my computer 3", id: 3, done: true },
  { title: "Fix my computer 4", id: 4, done: false },
];

function Home() {
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
              {todos.map((todo) => (
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
                        Tommorow at 12PM
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="todo-add">
              <button className="todo-add-btn">
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
    </div>
  );
}

export default Home;
