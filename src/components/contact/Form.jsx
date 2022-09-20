import React from "react";
import "./formStyles.css";

const Form = () => {
  return (
    <div className="form-container">
      <h1>Questions?</h1>
      <form>
        <div className="form-container-1">
          <div className="form-fullName-container">
            <label className="fullNameLabel" for="fullName">
              Full Name
            </label>
            <input className="fullNameInput" name="fullName" type="text" />
          </div>
          <div className="form-email-container">
            <label className="emailLabel" for="email">
              Email
            </label>
            <input className="emailInput" name="email" type="text" />
          </div>
        </div>

        <div className="form-container-2">
          <label className="messageSubjectLabel" for="messageSubject">
            Message Subject
          </label>
          <input
            className="messageSubjectInput"
            name="messageSubject"
            type="text"
          />

          <label className="messageLabel" for="message">
            Message
          </label>
          <input className="messageInput" name="message" type="text" />
          <button>send</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
