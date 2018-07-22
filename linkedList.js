/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let head = null;
  let tail = null;
  //This count will have two potential uses. One is to have an index property in my object, and another is to have an actual count that will be a measurement of "length" of the whole list
  // let count = 0;

  // class Node {
  //   constructor(value) {
  //     this.value = value;
  //     this.next = null;
  //     //Now whenever I want to extentiate the new node, it will have a property called position equal to the count. Because teh count is increasing whnever I add a new node, the position will be dynamic
  //     this.position = count;
  //   }
  // }

  const getHead = () => {
    return head;
  };

  const getTail = () => {
    return tail;
  };

  const add = data => {
    const newNode = {
      value: data,
      next: null
      // position: count
    };

    if (head === null) {
      head = newNode;
      tail = newNode;

      //The count increment is after the creation of the node because we want our starting node to have a position of 0. That is how the test is testing it. The first node it is looking for will be with a nth value of 0 not 1.
    } else {
      tail.next = newNode;
      tail = tail.next;
    }
    // count++;
    return tail;

    // if (head !== null && tail.next === null) {
    //   tail.next = newNode;
    //   tail = newNode;
    //   //The count increment is after the creation of the node because we want our starting node to have a position of 0. That is how the test is testing it. The first node it is looking for will be with a nth value of 0 not 1.
    //   count++;
    //   return tail;
    // } else {
    //   head = newNode;
    //   tail = newNode;
    //   count++;
    //   return tail;
    // }
  };

  const get = number => {
    var searchNode = head;

    let counter = 0;

    while (searchNode) {
      if (counter === number) {
        return searchNode;
      } else if (counter !== number && searchNode.next !== null) {
        counter++;
        searchNode = searchNode.next;
      } else {
        return false;
      }
    }
    // while (searchNode) {
    //   if (searchNode.position === number) {
    //     return searchNode;
    //   } else if (searchNode.position !== number && searchNode.next !== null) {
    //     searchNode = searchNode.next;
    //   } else {
    //     return false;
    //   }
    // }
  };

  const remove = number => {
    var searchNode = head;

    let counter = 0;

    while (searchNode) {
      if (counter === number && searchNode.next !== null) {
        searchNode = searchNode.next;
        head = searchNode;
      }
      if (counter === number - 1 && searchNode.next !== null) {
        searchNode.next = searchNode.next.next;
        if (searchNode.next === null) {
          tail = searchNode;
        }

        return searchNode;
      } else if (counter !== number - 1 && searchNode.next !== null) {
        counter++;
        searchNode = searchNode.next;
      } else {
        return false;
      }
    }

    // var searchNode = head;
    // console.log(searchNode, "Search Node");
    // console.log(searchNode.next, "Search Node Next");
    // console.log(searchNode.next.next, "Search Node Next Next");
    // console.log(number, "WHAT NUMBER BRUH");
    // while (searchNode) {
    //   if (
    //     searchNode.position === number - 1 &&
    //     searchNode.next !== null &&
    //     count - searchNode.position > 3
    //   ) {
    //     searchNode.next = searchNode.next.next;
    //     count--;
    //     for (var i = searchNode.position; i < count; i++) {
    //       searchNode.next.position = searchNode.next.position - 1;
    //       searchNode = searchNode.next;
    //     }
    //     return searchNode.next;
    //   } else if (
    //     searchNode.position === number - 1 &&
    //     searchNode.next !== null
    //   ) {
    //     console.log("Second if when its just limited");
    //     console.log(searchNode, "This should be Mozilla");
    //     console.log(searchNode.next, "This should be ");
    //     searchNode.next = searchNode.next.next;
    //     searchNode.next.position = searchNode.next.position - 1;
    //     count--;
    //     return searchNode.next;
    //   } else if (searchNode.position !== number && searchNode.next !== null) {
    //     console.log("IM SWITCHING IT UP");
    //     searchNode = searchNode.next;
    //   } else {
    //     return false;
    //   }
    // }
  };

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
