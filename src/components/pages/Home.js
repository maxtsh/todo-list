import React, { useState } from "react";
import Calendar from "react-calendar";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";

// Components
import Todos from "../layouts/Todos";
import AddTodoModal from "../modals/AddTodoModal";
import LiveClock from "../layouts/LiveCLock";

// Actions
import { getTaskfulDays } from "../../actions/index";

function Home() {
  const [modal, setModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(Date.now());

  console.log("HOME RENDER");

  function toggleModal() {
    setModal(!modal);
  }

  function handleCalenderDay(value, event) {
    setSelectedDate(value);
  }

  function handleTileClass({ date, view }) {
    const time = new Date();
    const activeDays = getTaskfulDays();

    return activeDays.map((day) => {
      return view === "month" &&
        time.getMonth() === date.getMonth() &&
        date.getDate() === day
        ? "circle"
        : null;
    });
  }

  return (
    <ErrorBoundary>
      <div className="container">
        <div className="wrapper">
          <div className="calendar-container">
            <div className="calendar-body">
              <Calendar
                calendarType="ISO 8601"
                onClickDay={handleCalenderDay}
                tileClassName={handleTileClass}
              />
            </div>
          </div>
          <div className="todo-container">
            <div className="todo-wrapper">
              <div className="todo-iphone-face">
                <div className="todo-iphone-face-line"></div>
                <div className="todo-iphone-face-camera"></div>
              </div>
              <div className="todo-iphone-left">
                <LiveClock />
              </div>
              <div className="todo-iphone-right">
                ....
                <i className="fas fa-wifi"></i>
                <i className="fas fa-battery-half"></i>
              </div>
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
                <p className="todo-intro-text">
                  These are your tasks for today.
                </p>
              </div>
              <Todos date={selectedDate} />
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
    </ErrorBoundary>
  );
}

export default Home;
