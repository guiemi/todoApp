import React from "react";

function InputArea({ updateInputHandler, addItem, updateInput }) {
  return (
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
}

export default InputArea;
