const { throwStatement } = require("@babel/types");

class List {

constructor () { //arr = undefined
  this.content = [];
  this.counter = 0;
};


  sortAsc() {
    return this.content.sort((a,b) => a.id-b.id);
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

  //index prop within obj will start by 1 when new Item is created b/c of prefix incrementor
  addItem(str) {
    this.content.push(new Item(str, ++this.counter));
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

  constructor (task, i) {
    this.done = false;
    this.task = task;
    this.id = i;
  }
};

module.exports = {List, Item};