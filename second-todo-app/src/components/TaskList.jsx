import React from "react";

const TaskList = ({ deleteItem, addItemToDone, list }) => {
  // useEffect(() => {
  //   list;
  // }, [list]);

  return (
    <div className="taskList">
      <span>Tasks to do:</span>
      <ul>
        {list &&
          list.map((item) => {
            return (
              <li key={item.id}>
                {item.value}{" "}
                <button
                  onClick={() => {
                    deleteItem(item.id);
                    addItemToDone(item);
                  }}
                >
                  Complete task
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TaskList;
