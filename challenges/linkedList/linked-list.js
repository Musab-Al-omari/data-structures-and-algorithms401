'use strict'

class Node {

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
  }

  //   append(value) {
  //     let node = new Node(value);
  //     //  here we have 2 case
  //     // first what if the link list empty ?
  //     // second what if the link list already have some nodes?
  //     if (this.head === null) {
  //       this.head = node;
  //     } else {
  //       let currentNode = this.head;
  //       while (currentNode.next) {
  //         currentNode = currentNode.next;
  //       }
  //       currentNode.next = node

  //     }
  //   }
  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this
    }
    let theCurrentNode = this.head
    while (theCurrentNode.next) {

      theCurrentNode = theCurrentNode.next
    }
    theCurrentNode.next = node
    return this
  }

  insert(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }

  insertAfter(value, newVal) {
    let currentNode = this.head
    while (currentNode != null) {
      if (currentNode.value === value) {
        let newNode = new Node(newVal);
        newNode.next = currentNode.next
        currentNode.next = newNode
        return;
      }
      currentNode = currentNode.next
    }
  }

  insertBefore(value, newVal) {

    let currentNode = this.head

    while (currentNode.value) {
      // case 1 if the value === head node 
      if (currentNode.value === value) {
        let newNode = new Node(value);

        currentNode.value = newVal

        newNode.next = currentNode.next;

        currentNode.next = newNode;
        return;
      }
      // case 2 if the value === any else node 
      if (currentNode.next.value === value) {
        let newNode = new Node(newVal);

        newNode.next = currentNode.next;

        currentNode.next = newNode;
        return;
      }
      currentNode = currentNode.next

    }
  }





  includes(value) {
    let theCurrentNode = this.head

    while (theCurrentNode) {
      if (theCurrentNode.value === value) {
        return true
      }
      theCurrentNode = theCurrentNode.next
    }
    return false
  }


  toString() {
    let theCurrent = this.head
    let nodeArray = []
    while (theCurrent) {
      nodeArray.push(theCurrent.value)
      theCurrent = theCurrent.next
    }
    nodeArray.push(null)
      // console.log(nodeArray);
    let valueString = nodeArray.reduce((acc, value) => {
        if (value === null) { return acc + `{${value}}` }
        return acc + `{${value}}->`
      }, '')
      // console.log(valueString)
    return valueString
  }




}
module.exports = linkedList