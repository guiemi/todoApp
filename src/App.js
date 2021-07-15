import React, { Component, useEffect, useState } from "react";
import CompletedTasks from "./Components/CompletedTasks";
import InputArea from "./Components/InputArea";
import TaskList from "./Components/TaskList";

import "./style.css";

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const [updateInput, setUpdateInput] = useState("");

  const updateInputHandler = (value) => {
    setUpdateInput(value)
  };
  
  const addItem = () => {
    setNewItem({ id: 1 + Math.random(), value: newItem.slice() });

    //copy of current list of items
    // const list = [...list]
    setList([...list]);

    // add new item to list
    list.push(newItem);

    // update state with new list and reset newItem input
    // setState({
    //   list,
    //   newItem:""
    // })
    setNewItem([...list, newItem]);
  };

  const deleteItem = (id) => {
    // copy current list of items
    // const list = [...list]
    setList([...list]);

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
        addItem={addItem}
        updateInputHandler={updateInputHandler}
        newItem={newItem}
        updateInput={updateInput}
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
