import React, { Component } from 'react'

class NewTask extends Component {
    addItem(){
        //create item with unique id
        const newItem={
          id: 1 + Math.random(),
          value: this.state.newItem.slice()
        }
    }
    render() {
        return (
            <div className="inputArea">
                <p>Add an Item...</p>
                <input type="text" placeholder="Type item here..." value={this.state.newItem} onChange={e => this.updateInput("newItem", e.target.value)}/>
                <button onClick={() => this.addItem()}>Add</button>
          </div>
  
        )
    }
}

export default NewTask