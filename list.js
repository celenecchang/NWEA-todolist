class List {

constructor (arr) {
  this.content = arr
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

  addItem(str){
    this.content.push(new Item(str));
    return this.content
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