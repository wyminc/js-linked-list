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
    let searchNode = head;

    let counter = 0;

    while (searchNode) {
      //This is the first condition in the ifs to check if the node that wants to be removed will be in the head position
      //This if condition is in the beginning because we want our loop to search for the head first while the counter is at 0 before it starts to increase
      if (counter === 0 && number === 0) {
        head = searchNode.next;
        return head;

        //The loop will always want to be at the node before the actual node it wants to remove, hence the number - 1(loop is at 0 position but wants to remove 1, we need node0.next to affect 1)
        //There is also a check to see if the node that is after the current node(the node that is trying to be removed) exists
      } else if (counter === number - 1 && searchNode.next !== null) {
        searchNode.next = searchNode.next.next; //set the searchNode.next to equal the node after it, essentially removing the original searchNode.next

        //This is an inner if statement within the elseif that will check to see if the node that was just changed is the last node
        if (searchNode.next === null) {
          tail = searchNode;
        }
        return tail;

        //This if is where the loop will continue to iteriate through each node until the counter is equal to the number-1.
        //eg if the loop is trying to remove 3, it needs to equal 2 first and until that point searchNode will keep changing to searchNode.next, searchNode.next.next, searchNode.next.next.next, etc.
      } else if (counter !== number - 1 && searchNode.next !== null) {
        counter++;
        searchNode = searchNode.next;

        //Else return false for the test to work
      } else {
        return false;
      }
    }
  };

  const insert = (data, number) => {
    let searchNode = head;

    let counter = 0;

    while (searchNode) {
      //This will be variable used to create new nodes(objects) everytime the method is called.
      const insertNode = {
        value: data,
        next: null
      };

      //This is the first condition in the ifs to check if the node that wants to be added will be in the head position
      //This if condition is in the beginning because we want our loop to search for the head first while the counter is at 0 before it starts to increase
      if (counter === 0 && number === 0) {
        head = insertNode;
        head.next = searchNode;
        return head;

        //The loop will always want to be at the node before the actual node it wants to add, hence the number - 1(loop is at 0 position but wants to add a node before 1, we need node0.next to make it the new node1)
        //There is also a check to see if the node that is after the current node exists
      } else if (counter === number - 1 && searchNode.next !== null) {
        savedNode = searchNode.next;
        searchNode.next = insertNode;
        insertNode.next = savedNode;

        //If the node after the current node does not exist, then it will become the tail
        if (searchNode.next.next === null) {
          tail = searchNode.next;
        }
        return tail;

        //This if is where the loop will continue to iteriate through each node until the counter is equal to the number-1.
        //eg if the loop is trying to insert at 3, it needs to equal 2 first and until that point searchNode will keep changing to searchNode.next, searchNode.next.next, searchNode.next.next.next, etc.
      } else if (counter !== number - 1 && searchNode.next !== null) {
        counter++;
        searchNode = searchNode.next;

        //Else return false for the test to work
      } else {
        return false;
      }
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
