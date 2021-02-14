import React, { useState } from "react";

const InputArea = ({ newItem, updateInputHandler, addItem }) => (
  <div className="inputArea">
    <span>MinimalList</span>
    <input
      type="text"
      placeholder="Add a task"
      value={newItem}
      onChange={(e) => updateInputHandler("newItem", e.target.value)}
    />
    <button onClick={() => addItem()}>Add</button>
  </div>
);

export default InputArea;