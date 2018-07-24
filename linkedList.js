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
    //These are variables that are stored with objects used to refernece later on in the if statement
    const prevNode = get(number - 1);
    const currentNode = get(number);
    const nextNode = get(number + 1);

    //This if is to check if the number we are trying to remove exist
    if (!currentNode) {
      return false;

      //This will check if the node being removed is the head, then set the node after as the head.
    } else if (head === currentNode && !prevNode) {
      head = nextNode;
      return head;

      //This will check if the node being removed is at the end, by checking if the node after it exists. If it doesnt exist, then the node before the removed node will be set as the tail
    } else if (!nextNode) {
      prevNode.next = null;
      tail = prevNode;
      return tail;

      //This will just remove the node and set the next node in place of the node being removed so that it links up with the previous node
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

    //This if is to check if the number we are trying insert at exists
    if (!currentNode) {
      return false;

      //This will check if the node being looked at is the head, then insert the new node as the new head
    } else if (head === currentNode && !prevNode) {
      head = newNode;
      head.next = currentNode;
      return head;

      //This will be insertting everythign else by assinging the previous node's next as the new node that is being insertted and the new node.next as the current node
    } else {
      prevNode.next = newNode;
      newNode.next = currentNode;
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
