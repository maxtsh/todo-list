import React, { useState, useEffect } from "react";

function getClock() {
  const time = new Date();

  const seconds = String(time.getSeconds()).padStart(2, 0);
  const minutes = String(time.getMinutes()).padStart(2, 0);
  const hours = String(time.getHours()).padStart(2, 0);

  return `${hours}:${minutes}:${seconds}`;
}

function LiveClock() {
  const [clock, setClock] = useState(getClock());

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setClock(getClock());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  return <h4 className="todo-iphone-left-text">{clock}</h4>;
}

export default React.memo(LiveClock);
