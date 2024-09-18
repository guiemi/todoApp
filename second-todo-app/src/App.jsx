import { useState } from "react";
import "./App.css";
import InputArea from "./components/InputArea";
import TaskList from "./components/TaskList";
import CompletedTasks from "./components/CompletedTasks";

function App() {
  // const [newItem, setNewItem] = useState("");
  // const [doneList, setDoneList] = useState([]);
  // const [updateInput, setUpdateInput] = useState("");

  const [todoList, setTodoList] = useState([]);
  const [item, setItem] = useState("");
  const [todo, setTodo] = useState();

  const handleAddTodo = () => {
    // setTodoList((curr) => [...curr, item]);
  };

  // const updateInputHandler = (value) => {
  //   setUpdateInput(value);
  // };
  //
  // const addItem = () => {
  //   setNewItem({ id: 1 + Math.random(), value: newItem.slice() });
  //
  //   setList([...list]);
  //
  //   list.push(newItem);
  //
  //   setNewItem([...list, newItem]);
  // };
  //
  // const deleteItem = (id) => {
  //   setList([...list]);
  //
  //   const updatedList = list.filter((item) => item.id !== id);
  //
  //   setList({ updatedList });
  // };
  //
  // const addItemToDone = (id) => {
  //   setDoneList([...doneList]);
  //
  //   doneList.push(id);
  // };

  return (
    <div className="App">
      <h1>App</h1>
      <InputArea
        setTodo={setTodo}
        handleAddTodo={handleAddTodo}
        // addItem={addItem}
        // updateInputHandler={updateInputHandler}
        // newItem={newItem}
        // updateInput={updateInput}
      />
      {/* <TaskList */}
      {/*   list={list} */}
      {/*   deleteItem={deleteItem} */}
      {/*   addItemToDone={addItemToDone} */}
      {/* /> */}
      {/* <CompletedTasks doneList={doneList} /> */}
    </div>
  );
}

export default App;
