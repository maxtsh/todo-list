import React from "react";

function Popup({ message, type }) {
  const style = {
    color: type === "error" ? "#ffffff" : "#113a53",
    backgroundColor: type === "error" ? "#eb3b5a" : "#f3f6f8",
  };

  return (
    <div style={style} className="popup-container">
      {type === "error" ? (
        <i className="fas fa-exclamation-circle"></i>
      ) : (
        <i className="fas fa-check-circle"></i>
      )}
      <h4 className="popup-message">{message}</h4>
    </div>
  );
}

export default Popup;
