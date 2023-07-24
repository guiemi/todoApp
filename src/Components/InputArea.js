import React from "react";

const InputArea = ({ taskText }) => {
  const handleChange = ({ target: { value } }) => {
    taskText(value);
  };

  return (
    <div className="inputArea">
      <span>MinimalList</span>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Add a task"
        value={taskText}
      />
      <button>Add</button>
    </div>
  );
};

export default InputArea;
