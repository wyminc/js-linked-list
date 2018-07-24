/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let head = null;
  let tail = null;

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
    };

    if (head === null) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = tail.next;
    }
    return tail;
  };

  const get = number => {
    var searchNode = head;

    let counter = 0;

    while (searchNode) {
      //Simple if to look if the number(counter) that the loop is at is equal to the number that is being inputted(nubmer)
      if (counter === number) {
        return searchNode;

        //This if is where the loop will continue to iteriate through each node until the counter is equal to the number
      } else if (counter !== number && searchNode.next !== null) {
        counter++;
        searchNode = searchNode.next;
      } else {
        return false;
      }
    }
  };

  const remove = number => {
    const prevNode = get(number - 1);
    const currentNode = get(number);
    const nextNode = get(number + 1);

    if (!currentNode) {
      return false;
    } else if (head === currentNode && !prevNode) {
      head = nextNode;
      return head;
    } else if (!nextNode) {
      prevNode.next = null;
      tail = prevNode;
      return tail;
    } else {
      prevNode.next = nextNode;
      return nextNode;
    }
  };

  const insert = (data, number) => {
    //This will be variable used to create new nodes(objects) everytime the method is called.
    const newNode = {
      value: data,
      next: null
    };

    const prevNode = get(number - 1);
    const currentNode = get(number);

    if (!currentNode) {
      return false;
    } else if (head === currentNode && !prevNode) {
      head = newNode;
      head.next = currentNode;
      return head;
    } else if (!currentNode) {
      prevNode.next = newNode;
      tail = newNode;
      return tail;
    } else {
      newNode.next = currentNode;
      prevNode.next = newNode;
      return newNode;
    }
  };

  return {
    getHead,
    getTail,
    add,
    get,
    remove,
    insert
  };
}
