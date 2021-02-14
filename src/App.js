import React, { Component, useState } from "react";
import CompletedTasks from './Components/CompletedTasks'
import InputArea from './Components/InputArea';
import TaskList from './Components/TaskList';

import "./style.css";

const App = (props) => {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const [updateInput, setUpdateInput] = useState();

  const updateInputHandler = (key, value) => {
    //update react state
    setUpdateInput({
      [key]: value,
    });
  };

  const addItem = () => {
    //create item with unique id
    // const newItem={
    //   id: 1 + Math.random(),
    //   value: newItem.slice()
    // }
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
