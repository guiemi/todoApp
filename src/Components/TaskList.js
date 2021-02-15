import React from "react";

const TaskList = ({ list }) => {
  return (
    <div className="taskList">
      <span>Tasks to do:</span>
      <ul>
        {list &&
          list.map((item) => {
            return (
              <li key={item.id}>
                {item}
                <button>Complete task</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TaskList;
