import React from "react";
import Calendar from "react-calendar";
function Home() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="calendar-container">
          <div className="calendar-body">
            <Calendar calendarType="ISO 8601" />
          </div>
        </div>
        <div className="todo-container"></div>
      </div>
    </div>
  );
}

export default Home;
