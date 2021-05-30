'use strict'
const { Node, BinaryTree, BinarySearchTree } = require('../tree');


describe('Binary Tree', () => {
  let tree = null;
  beforeAll(() => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    tree = new BinaryTree(one);
  });

  it('constructor', () => {
    let newTree = new BinaryTree();
    expect(newTree.root).toBeNull();
  });

  it('preOrder', () => {
    let expected = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    let preOrderResult = tree.preOrder();
    // console.log("preOrderResult: ", preOrderResult)
    expect(preOrderResult).toEqual(expected);
  });

  it('inOrder', () => {
    let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    let inOrderResult = tree.inOrder();
    // console.log("inOrderResult: ", inOrderResult)
    expect(inOrderResult).toEqual(expected);
  });

  it('postOrder', () => {
    let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    let postOrderResult = tree.postOrder();
    // console.log("postOrderResult: ", postOrderResult)
    expect(postOrderResult).toEqual(expected);
  });
  it('it find the max value ', () => {


    // console.log("postOrderResult: ", postOrderResult)
    expect(tree.findMaximumValue()).toEqual(9);
  });



});

describe('BinarySearchTree', () => {
  const hh = new BinarySearchTree(5)

  it('have a root', () => {
    expect(hh.root.value).toEqual(5)
  })

  it('CAN insert in the right ', () => {
    hh.add(6)
    expect(hh.root.right.value).toEqual(6)
  })
  it('CAN insert in the left', () => {
    hh.add(4)
    expect(hh.root.left.value).toEqual(4)
  })
  it('CAN see if the tree  contains the value ', () => {
    hh.add(4)
    hh.add(6)
    hh.add(8)
    hh.add(10)
    expect(hh.contains(10)).toEqual(true)
  })
  it('CAN see if the tree don t  contains the value ', () => {
    hh.add(4)
    hh.add(6)
    hh.add(8)
    hh.add(10)
    expect(hh.contains(111)).toEqual(false)
  })


})