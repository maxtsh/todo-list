import React, { useState } from "react";
import Calendar from "react-calendar";

// Components
import Todos from "../layouts/Todos";
import AddTodoModal from "../modals/AddTodoModal";

function Home() {
  const [modal, setModal] = useState(false);

  console.log("HOME RENDER");

  function toggleModal() {
    setModal(!modal);
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
            <Todos />
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

      {modal ? <AddTodoModal close={toggleModal} /> : null}

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
