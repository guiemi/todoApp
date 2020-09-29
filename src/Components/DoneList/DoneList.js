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
 