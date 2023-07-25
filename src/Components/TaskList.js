import React, { useState } from "react";

const TaskList = ({ todos, handleComplete }) => {
  const [isButtonShown, setIsButtonShown] = useState(false);

  const handleMouseOver = () => {
    setIsButtonShown(true);
  };

  const handleMouseOut = () => {
    setIsButtonShown(false);
  };

  return (
    <div className="taskList">
      {todos &&
        todos.map((todo) => (
          <label
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            key={todo.id}
          >
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
            {isButtonShown && <button>Delete</button>}
          </label>
        ))}
    </div>
  );
};

export default TaskList;
