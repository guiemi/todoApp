import React from "react";

const CompletedTasks = ({ doneList }) => {

  return (
    <div
      className="tasksDone"
      style={{
        display: doneList.length > 0 ? "inline-block" : "none",
      }}
    >
      <span>Tasks completed: </span>
      <ul>
        {doneList.map((item) => {
          return <li>{item.value}</li>;
        })}
      </ul>
    </div>
  );
};

export default CompletedTasks;