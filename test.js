

const {List, Item} = require('./list.js');

describe('listFuncs', () =>{

  //resetting list back to initial state before each test
  let list;

  beforeEach(() => {
    list = new List();
    list.addItem('buy groceries');
    list.addItem('exercise');
    list.addItem('walk dogs');
    list.addItem('study');
    list.addItem('wash car'); 
    list.addItem('make doctors appt');
})

  it('should sort list in ascending order', () => {
    //objs are passed by reference, so we can deep clone it first in order to not mutate it
    const listBeforeSort = JSON.parse(JSON.stringify(list));
    expect(list.sortAsc()).toEqual(listBeforeSort.content); 
  })

  it('should sort list in descending order', () => {
    const listBeforeSort = JSON.parse(JSON.stringify(list));
    expect(list.sortDesc()).toEqual(listBeforeSort.content.reverse());
  })

  it('should sort list in ascending order with all tasks not done first', () =>{
    const list = new List ([{task:'eat', done: false, id: 0}, {task:'sleep', done: true, id: 2}, {task:'work', done: false, id: 1}]);
    const sortIncomplete = new List ([{task:'eat', done: false, id: 0}, {task:'work', done: false, id: 1}, {task:'sleep', done: true, id: 2}]);

    expect(list.sortNotDone()).toEqual(sortIncomplete.content);
  })

  //markDone method returns a boolean
  //returns the marked task
  it('should mark a task as done', () => {
    const index = 3;
    const marked= list.content.at(3);

    expect(list.markDone(index).done).toEqual(true);
    expect(list.markDone(index)).toEqual(marked);
  })


  // xit('should print list and include item and item status', () => {
    
  // })

  //checks if item length has increased and item has been added to the end of the list
  //b/c return list after item has been added, output is an arr
  it('should add an item to the list', () => {

    //copy of original list length
    const listLength = list.content.length;
    const task = 'eat dinner';

    expect(list.addItem(task).length).toEqual(listLength+1);

    //checks if item added to list was added at the end
    expect(list.content.at(-1).task).toEqual(task);
  })

  //returns deleted item, output: deleted item obj
  it('should remove item from the list', () => {
    const listLength = list.content.length;
    const index = 2;
    const removed = list.content.at(2);
   
    expect(list.removeItem(index)[0]).toEqual(removed);
    expect(list.content.length).toEqual(listLength-1);

  })

  //returns newly arranged list
  it('should move an item on the list from one place to another', () => {
    const list = new List ([new Item('eat'), new Item('sleep'), new Item('work')]);
    const moveList = new List ([new Item('sleep'), new Item('eat'), new Item('work')]);

    expect(list.moveItem(0,1)).toEqual(moveList.content);
  })

  
  it('should remove all items from the list', () => {
    const emptyArr = [];

    expect(list.clearList()).toEqual(emptyArr);
  })
});