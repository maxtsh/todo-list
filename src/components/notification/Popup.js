import React from "react";

function Popup({ message, type }) {
  const style = {
    color: type === "error" ? "#ffffff" : "#113a53",
    backgroundColor: type === "error" ? "#eb3b5a" : "#f3f6f8",
  };

  return (
    <div style={style} className="popup-container">
      <h1>{message}</h1>
    </div>
  );
}

export default Popup;
