class List {

constructor (arr) {
  this.content = arr
}

  sortAsc() {

  }

  sortDesc() {
   
  }

  sortNotDone() {

  }

  markDone() {

  }

  printList() {
    
  }

  addItem(str) {
    this.content.push(new Item(str));
    return this.content;
  }

  //inefficient b/c of time complexity 
  removeItem(index) {
    return this.content.splice(index, 1);
  }

  moveItem() {

  }

  clearList() {
    this.content.length = 0
    return this.content
  }

}


class Item {

  constructor (task) {
    this.done = false
    this.task = task
  }
}

module.exports = {List, Item}