import React, { useEffect, useState } from "react";
import CompletedTasks from "./Components/CompletedTasks";
import InputArea from "./Components/InputArea";
import TaskList from "./Components/TaskList";

import "./style.css";

const App = () => {
  const [newItem, setNewItem] = useState();
  const [list, setList] = useState();
  const [doneList, setDoneList] = useState([]);
  const [updateInput, setUpdateInput] = useState();

  const handleChange = (event) => {
    setUpdateInput(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log(`This was submitted: ${updateInput}`);
    setNewItem({
      id: 1 + Math.random(),
      value: updateInput.slice(),
    });

    // setList(newItem);
  };

  useEffect(() => {
    setList(newItem);
  }, [newItem]);

  const deleteItem = (id) => {
    // copy current list of items
    // const list = [...list]
    // setList([...list]);

    //filter out item being deleted
    const updatedList = list.filter((item) => item.id !== id);

    // setState({list:updatedList})
    setList({ updatedList });
  };

  const addItemToDone = (id) => {
    //copy current list of items
    // const doneList = [...doneList]
    setDoneList([...doneList]);

    //update the checked list
    doneList.push(id);

    // setState({doneList})
  };

  return (
    <div className="App">
      <InputArea
        handleClick={handleClick}
        newItem={newItem}
        updateInput={updateInput}
        handleChange={handleChange}
      />
      <TaskList
        list={list}
        deleteItem={deleteItem}
        addItemToDone={addItemToDone}
      />
      <CompletedTasks doneList={doneList} />
    </div>
  );
};

export default App;
