import React from "react";

const InputArea = ({ newItem, updateInputHandler, addItem, updateInput }) => (
  <div className="inputArea">
    <span>MinimalList</span>
    <input
      type="text"
      placeholder="Add a task"
      value={updateInput}
      onChange={(e) => updateInputHandler(e.target.value)}
    />
    <button onClick={() => addItem()}>Add</button>
  </div>
);

export default InputArea;
