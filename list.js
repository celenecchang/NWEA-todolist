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

  removeItem(index){
    this.content.splice(index, 1)
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