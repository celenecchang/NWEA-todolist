

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
    let listBeforeSort = JSON.parse(JSON.stringify(list));
    expect(list.sortAsc()).toEqual(listBeforeSort);
  })

  it('should sort list in descending order', () => {
    let listBeforeSort = JSON.parse(JSON.stringify(list));
    expect(list.sortDesc()).toEqual(listBeforeSort.list.reverse());
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

  it('should add an item to the list', () => {
    return 0
  })

  it('should remove item from the list', () => {
    return 0
  })

  it('should move an item on the list from one palce to another', () => {
    return 0
  })

  it('should remove all items from the list', () => {
    return 0
  })
});