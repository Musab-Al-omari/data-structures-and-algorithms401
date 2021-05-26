'use strict'


class Node {
  constructor(value) {
    this.value = value
    this.next = null

  }
}

class Stack {
  constructor() {
    this.top = null
    this.storage = new Array() // its like an empty array 
  }
  push(value) {
    this.top = new Node(value)
    this.storage.unshift(this.top)
    return this.top
  }

  peek() {
    if (this.top) {

      return this.top
    }
    return 'exception'
  }
  pop() {
    if (this.top) {
      let item = this.storage.shift()
      this.top = this.storage[0] || null
      return item
    }
    return 'exception'
  }
  isEmpty() {
    if (this.top) {
      return false
    }
    return true
  }
}

class Queue {
  constructor() {
    this.front = null
    this.MyQueue = new Array()
  }
  enqueue(value) {
    this.front = new Node(value);
    this.MyQueue.push(this.front)
    return this.front
  }
  dequeue() {
    if (this.front) {
      if (this.MyQueue.length == 1) {
        this.front = null
        return this.MyQueue.shift()
      }
      let x = this.MyQueue.shift()
      this.front = this.MyQueue[0]
      return x
    }
    this.front = null
    return 'exception'
  }
  peek() {
    if (this.front) {
      return this.MyQueue[0]
    }
    return 'exception'
  }
  isEmpty() {
    if (this.front) {
      return false

    }
    return true
  }

}
module.exports = {
  Node: Node,
  Stack: Stack,
  Queue: Queue
}