class Item {

  constructor (task, i) {
    this.done = false;
    this.task = task;
    this.id = i;
  }
};

class List {

constructor (arr = []) {
  this.content = arr;
  this.counter = arr.length;
};


  // sort List elements, and then access id of the obj by using . notation
  sortAsc() {
    return this.content.sort((a,b) => a.id-b.id);
  }  

  sortDesc() {
    return this.content.sort((a,b) => b.id-a.id);
  }

  sortNotDone() {
    const arr1 =[];
    const arr2 =[];
    for(let i = 0; i<this.content.length; i++){
      if(this.content[i].done === true){
        arr1.push(this.content[i]);
        arr1.sort((a,b) => a.id-b.id);
      }else{
        arr2.push(this.content[i]);
        arr2.sort((a,b) => a.id-b.id);
      }
    }
    this.content = arr2.concat(arr1)
    return this.content;
  }

  markDone(index) {
   this.content[index].done = true;
   return this.content[index];
  }

  //logs list onto the console
  printList() {
    console.log(this.content);
  }

  //index prop within obj will start by 1 when new Item is created b/c of prefix incrementor
  addItem(str) {
    this.content.push(new Item(str, ++this.counter)); 
    return this.content;
  }

  removeItem(index) {
    return this.content.splice(index, 1);
  }

  
  moveItem(initial, destination) {
    let item = this.content.splice(initial, 1);
    this.content.splice(destination, 0, item[0]);
    return this.content;
  }

  clearList() {
    this.content.length = 0;
    return this.content;
  }

};

module.exports = {List, Item};
