import React, { useState } from "react";
import * as S from "./Components.styles";

const TaskList = ({ todos, handleComplete }) => {
  const [isButtonShown, setIsButtonShown] = useState(false);

  const handleMouseOver = () => {
    setIsButtonShown(true);
  };

  const handleMouseOut = () => {
    setIsButtonShown(false);
  };

  return (
    <S.TaskListContainer>
      {todos &&
        todos.map((todo) => (
          <S.TaskListLine>
            <label
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              key={todo.id}
              for="checkbox"
            >
              <input
                name="checkbox"
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleComplete(todo)}
              />
              <S.Title isChecked={!!todo.complete}>{todo.title}</S.Title>
              {/* {isButtonShown && <button>Delete</button>} */}
            </label>
          </S.TaskListLine>
        ))}
    </S.TaskListContainer>
  );
};

export default TaskList;
