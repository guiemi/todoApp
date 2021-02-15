import React from "react";

const InputArea = ({ handleChange, newItem, handleSubmit, updateInput }) => (
  <form onSubmit={handleSubmit} className="inputArea">
    <span className="title">Minimal List</span>
    <input
      type="text"
      // value={updateInput}
      placeholder="Add a task"
      onChange={handleChange}
    />

    <input className="submitButton" value="Add/Submit" type="submit" />
  </form>
);

export default InputArea;
