import React from "react";

function Modal({ close }) {
  console.log("MODAL RENDER");

  function handleCLose() {
    close();
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
            <form>
              <div className="input-wrap">
                <input type="email" name="email" required />
                <label htmlFor="email">
                  <span className="content">Title</span>
                </label>
                <i className="fas fa-tasks"></i>
              </div>

              <div className="input-wrap">
                <input
                  type="text"
                  name="deadline"
                  required
                  maxLength={20}
                  minLength={8}
                />
                <label htmlFor="deadline">
                  <span className="content">Deadline</span>
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

export default Modal;
