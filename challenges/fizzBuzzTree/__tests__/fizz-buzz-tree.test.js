'use strict'

const Node = require('../fizz-buzz-tree').Node
const fizzBuzzTree = require('../fizz-buzz-tree').fizzBuzzTree
const kTree = require('../fizz-buzz-tree').kTree

describe('fizz-buzz-tree', () => {


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
  fizzBuzzTree(Tree)

  it('currantNode.value % 3 == 0 & currantNode.value % 5 === 0 it will be FizzBuzz', () => {

    expect(node13.value).toEqual('FizzBuzz')

  })
  it('currantNode.value % 3 == 0 it will be Fizz', () => {

    expect(node12.value).toEqual('Fizz')

  })
  it('currantNode.value % 5 == 0 it will be Buzz', () => {

    expect(node4.value).toEqual('Buzz')

  })


})