import React, { useState } from 'react';

function App(props) {
  [newItem, setNewItem] = useState('')
  [list, setList] = useState([])
  [doneList, setDoneList] = useState([]) 
}

// class App extends Component {
//   constructor(props){
//     super(props)

//     this.state={
//       newItem:"",
//       list:[],
//       doneList:[],
//     }
//   }

//   updateInput(key, value){
//     //update react state
//     this.setState({
//       [key]: value,
//     })
//   }
//   addItem(){
//     //create item with unique id
//     const newItem={
//       id: 1 + Math.random(),
//       value: this.state.newItem.slice()
//     }

//     //copy of current list of items
//     const list = [...this.state.list]

//     // add new item to list
//     list.push(newItem)

//     // update state with new list and reset newItem input
//     this.setState({
//       list,
//       newItem:""
//     })
//   }
//   deleteItem(id){
//     // copy current list of items
//     const list = [...this.state.list]

//     //filter out item being deleted
//     const updatedList = list.filter(item => item.id !== id)

//     this.setState({list:updatedList})
//   }

//   addItemToDone(id) {
//     //copy current list of items
//     const doneList = [...this.state.doneList]

//     //update the checked list
//     doneList.push(id)

//     this.setState({doneList}) 

// }

