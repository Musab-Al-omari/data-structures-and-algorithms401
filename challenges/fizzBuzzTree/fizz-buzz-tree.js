'use strict'




class Node {
  constructor(value) {
    this.value = value;
    this.children = []
  }
}
class kTree {
  constructor(root) {
    this.root = root
  }

}


function fizzBuzzTree(tree) {
  let result = []
  let queue = []

  queue.push(tree.root)

  while (queue.length) {

    let currantNode = queue.shift()

    if (currantNode.value % 3 == 0 & currantNode.value % 5 === 0) {
      currantNode.value = 'FizzBuzz'
    } else if (currantNode.value % 3 === 0) {
      currantNode.value = 'Fizz'
    } else if (currantNode.value % 5 === 0) {
      currantNode.value = 'Buzz'
    }
    result.push(currantNode.value)
    if (currantNode.children) {
      currantNode.children.forEach(value => {
        queue.push(value)
      })
    }
  }
  return tree
}

module.exports = { Node, kTree, fizzBuzzTree }
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(5);


let node11 = new Node(11);
let node12 = new Node(12);
let node13 = new Node(15);

let node22 = new Node(22);
let node23 = new Node(23);
let node24 = new Node(24);

let node33 = new Node(33);
let node34 = new Node(34);
let node35 = new Node(35);

node1.children = [node2, node3, node4]
node2.children = [node11, node12, node13]
node3.children = [node22, node23, node24]
node11.children = [node33, node34]
node13.children = [node35]

let Tree = new kTree(node1)
console.log(fizzBuzzTree(Tree));