class List {

constructor (arr) {
  this.list = arr
}

  sortAsc(){

  }

  sortDesc(){

  }

  sortNotDone(){

  }

  markDone(){

  }

  printList(){
    
  }

  addItem(){

  }

  removeItem(){

  }

  moveItem(){

  }

  clearList(){

  }

}


class Item {

  constructor (task) {
    this.done = false
    this.task = task
  }
}

module.exports = {List, Item}