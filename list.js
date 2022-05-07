const { throwStatement } = require("@babel/types");

class List {

constructor (arr) {
  this.content = arr
};

  sortAsc() {

  }

  sortDesc() {
   
  }

  sortNotDone() {

  }

  markDone(index) {
   this.content[index].done = true;
   return this.content[index];
  }

  //logs list onto the console??
  printList() {
    console.log(this.content);
  }

  addItem(str) {
    this.content.push(new Item(str));
    return this.content;
  }

  //inefficient b/c of time complexity 
  removeItem(index) {
    return this.content.splice(index, 1);
  }


  moveItem(initial, destination) {
    let item= this.content.splice(initial, 1);
    this.content.splice(destination, 0, item[0]);
    return this.content;
  }

  clearList() {
    this.content.length = 0;
    return this.content;
  }

};


class Item {

  constructor (task) {
    this.done = false
    this.task = task
  }
};

module.exports = {List, Item};