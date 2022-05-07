

const {List, Item} = require('./list.js');

describe('listFuncs', () =>{

  //resetting list back to initial state before each test
  let list;

  beforeEach(() => {
    list = new List([new Item('buy groceries'), 
    new Item('exercise'), 
    new Item('walk dogs'), 
    new Item('study'), 
    new Item('wash car'), 
    new Item('make doctors appt'),
    new Item('order flowers'),
    new Item('make dinner reservation'),
    new Item('buy medicine') 
 ]);
})

  it('should sort list in ascending order', () => {
    //objs are passed by reference, so we can deep clone it first in order to not mutate it
    const listBeforeSort = JSON.parse(JSON.stringify(list));
    expect(list.sortAsc()).toEqual(listBeforeSort);
  })

  it('should sort list in descending order', () => {
    const listBeforeSort = JSON.parse(JSON.stringify(list));
    expect(list.sortDesc()).toEqual(listBeforeSort.content.reverse());
  })

  it('should sort list in ascending order with all tasks not done first', () =>{
    return 0
  })

  it('should mark a task as done', () => {
    return 0
  })

  it('should print list and include item and item status', () => {
    return 0
  })

  //checks if item length has increased and item has been added to the end of the list
  //b/c return list after item has been added, output is an arr
  it('should add an item to the list', () => {

    //copy of original list length
    const listLength = list.content.length;
    const task = 'eat dinner';

    expect(list.addItem(task).length).toEqual(listLength+1);
    expect(list.content.at(-1).task).toEqual(task);
  })

  //return deleted item, so output is the deleted item obj
  it('should remove item from the list', () => {
    const listLength = list.content.length;
    const index = 2;
    const removed = list.content.at(2)
   
    expect(list.removeItem(index)[0]).toEqual(removed);
    expect(list.content.length).toEqual(listLength-1);

  })

  it('should move an item on the list from one palce to another', () => {
    return 0
  })

  it('should remove all items from the list', () => {
    const emptyArr = []

    expect(list.clearList()).toEqual(emptyArr);
  })
});