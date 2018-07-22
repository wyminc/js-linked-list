/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let head = null;
  let tail = null;
  //This count will have two potential uses. One is to have an index property in my object, and another is to have an actual count that will be a measurement of "length" of the whole list
  let count = 0;

  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      //Now whenever I want to extentiate the new node, it will have a property called position equal to the count. Because teh count is increasing whnever I add a new node, the position will be dynamic
      this.position = count;
    }
  }

  const getHead = () => {
    return head;
  };

  const getTail = () => {
    return tail;
  };

  const add = value => {
    const newNode = new Node(value);
    if (head !== null && tail.next === null) {
      tail.next = newNode;
      tail = newNode;
      //The count increment is after the creation of the node because we want our starting node to have a position of 0. That is how the test is testing it. The first node it is looking for will be with a nth value of 0 not 1.
      count++;
      return tail;
    } else {
      head = newNode;
      tail = newNode;
      count++;
      return tail;
    }
  };

  const get = number => {
    var searchNode = head;

    while (searchNode) {
      if (searchNode.position === number) {
        return searchNode;
      } else if (searchNode.position !== number && searchNode.next !== null) {
        searchNode = searchNode.next;
      } else {
        return false;
      }
    }
    return searchNode;
  };

  const remove = () => {};

  const insert = () => {};

  return {
    getHead,
    getTail,
    add,
    get,
    remove,
    insert
  };
}
