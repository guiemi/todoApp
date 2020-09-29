import React, { Component } from 'react';
import './style.css'

class App extends Component {
  constructor(props){
    super(props)

    this.state={/**/
      newItem:"",
      list:[],
      doneList:[],
    }
  }

  updateInput(key, value){
    //update react state
    this.setState({
      [key]: value,
    })
  }
  addItem(){
    //create item with unique id
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    }

    //copy of current list of items
    const list = [...this.state.list]

    // add new item to list
    list.push(newItem)

    // update state with new list and reset newItem input
    this.setState({
      list,
      newItem:""
    })
  }
  deleteItem(id){
    // copy current list of items
    const list = [...this.state.list]

    //filter out item being deleted
    const updatedList = list.filter(item => item.id !== id)

    this.setState({list:updatedList})
  }

  addItemToDone(id) {
    //copy current list of items
    const doneList = [...this.state.doneList]

    //update the checked list
    doneList.push(id)

    this.setState({doneList}) 

  }

  render() {
    return (
      <div className="App">
        <div className="inputArea">
          <span>MinimalList</span>
          <input type="text" placeholder="Add a task" value={this.state.newItem} onChange={e => this.updateInput("newItem", e.target.value)}/>
          <button onClick={() => this.addItem()}>Add</button>
        </div>

          <div className="taskList">
            <span>Tasks to do:</span>
            <ul>
              {this.state.list.map(item => {
                return (
                  <li key={item.id}>{item.value} <button onClick= {() => {this.deleteItem(item.id); this.addItemToDone(item);}}>Complete task</button></li>
                  )
                })}
            </ul>          
          </div>

        <div 
        className="tasksDone" 
        style={{display: this.state.doneList.length > 0 ? 'inline-block' : 'none'}} >
          <span>Tasks completed: </span>
          <ul>
            {this.state.doneList.map(item => {
              return (
                <li>{item.value}</li>
              )
            })}
          </ul>        
        </div>
      </div>
    ) 
  }
}

export default App;
