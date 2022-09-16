import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <input name="fullName" type="text" />
        <input name="email" type="text" />
        <input name="messageSubject" type="text" />
        <input name="message" type="text" />
        <button>send</button>
      </form>
    </div>
  );
};

export default Form;
