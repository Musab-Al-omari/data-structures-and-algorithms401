'use strict'

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(root = null) {
      this.root = root;
    }
    // Pre-Order: Root - Left - Right
    // Time : O(n) -> n is the number of nodes
    // Space: O(h) -> h is the height of the tree
  preOrder() {
      let results = [];
      let traverse = (node) => {
        results.push(node.value);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
      }
      traverse(this.root);
      return results;
    }
    // In-Order: Left - Root - Right
    // Time : O(n) -> n is the number of nodes
    // Space: O(h) -> h is the height of the tree
  inOrder() {
      let results = [];
      let traverse = (node) => {
        if (node.left) traverse(node.left);
        results.push(node.value);
        if (node.right) traverse(node.right);
      }
      traverse(this.root);
      return results;
    }
    // Post-Order:  Left - Right - Root
    // Time : O(n) -> n is the number of nodes
    // Space: O(h) -> h is the height of the tree
  postOrder() {
    let results = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      results.push(node.value);
    }
    traverse(this.root);
    return results;
  }


  
  findMaximumValue() {
    let array = []

    const traverse = node => {
      array.push(node.value)
      if (node.left) { traverse(node.left) }
      if (node.right) { traverse(node.right) }
    }
    traverse(this.root);
    // console.log('array', array);
    let j = array[0];
    for (let i = 0; i < array.length; i++) {
      if (array[i] > j) {
        j = array[i]
      }
      // if (array[i] < j & j == 0) {
      //   j = array[i]
      // }
    }
    return j
  }

  // BinaryTree() {
  //   let result = [];
  //   let queue = [];
  //   queue.push(this.root);
  //   while (queue.length) {
  //     let currentNode = queue.shift()
  //     result.push(currentNode.value)
  //     if (currentNode.left) {
  //       queue.push(currentNode.left)
  //     }
  //   }
  //   return result
  // }

  bfs() {
    let result = []
    let queue = []

    queue.push(this.root)

    while (queue.length) {
      let currentNode = queue.shift()

      result.push(currentNode.value)

      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }

    return result
  }
}





class BinarySearchTree {
  constructor(value) {
    this.root = new Node(value)
    this.count = 1
  }

  add(value) {

    let newNode = new Node(value)

    const searchTree = (root) => {
      if (root.value > value) {
        if (!root.left) {
          root.left = newNode
        } else {
          searchTree(root.left)
        }
      } else if (root.value < value) {
        if (!root.right) {
          root.right = newNode
        } else {
          searchTree(root.right)
        }
      }
    }
    searchTree(this.root)
  }


  contains(value) {

    let currantNode = this.root
    while (currantNode) {
      if (currantNode.value === value) { return true }
      if (currantNode.value > value) {
        currantNode = currantNode.left
      } else {
        currantNode = currantNode.right
      }
    }
    return false
  }


}
module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree
}
















































































// // BINARY SEARCH TREE
// class Node {
//   constructor(value) {
//     this.value = value
//     this.left = null
//     this.right = null
//   }
// }

// class BST {
//   constructor(value) {
//     this.root = new Node(value)
//     this.count = 1
//   }

//   size() {
//     return this.count
//   }

//   add(value) {
//     this.count++

//       let newNode = new Node(value)

//     const searchTree = node => {
//       // if value < node.value, go left
//       if (value < node.value) {
//         // if no left child, append new node
//         if (!node.left) {
//           node.left = newNode
//         }
//         // if left child, look left again
//         else {
//           searchTree(node.left)
//         }
//       }
//       // if value > node.value, go right
//       else if (value > node.value) {
//         // if no right child, append new node
//         if (!node.right) {
//           node.right = newNode
//         }
//         // if right child, look right again
//         else {
//           searchTree(node.right)
//         }
//       }
//     }

//     searchTree(this.root)
//   }

//   min() {
//     let currentNode = this.root

//     // continue traversing left until no more children
//     while (currentNode.left) {
//       currentNode = currentNode.left
//     }

//     return currentNode.value
//   }

//   max() {
//     let currentNode = this.root

//     // continue traversing right until no more children
//     while (currentNode.right) {
//       currentNode = currentNode.right
//     }

//     return currentNode.value
//   }

//   contains(value) {
//     let currentNode = this.root

//     while (currentNode) {
//       if (value === currentNode.value) {
//         return true
//       }
//       if (value < currentNode.value) {
//         currentNode = currentNode.left
//       } else {
//         currentNode = currentNode.right
//       }
//     }

//     return false
//   }

//   // depth first search - branch by branch

//   // in-order
//   // left, root, right
//   // 2, 3, 12, 15, 28, 36, 39
//   dfsInOrder() {
//     let result = []

//     const traverse = node => {
//       // if left child exists, go left again
//       if (node.left) traverse(node.left)
//         // capture root node value
//       result.push(node.value)
//         // if right child exists, go right again
//       if (node.right) traverse(node.right)
//     }

//     traverse(this.root)

//     return result
//   }

//   // pre-order
//   // root, left, right
//   // 15, 3, 2, 12, 36, 28, 39
//   dfsPreOrder() {
//     let result = []

//     const traverse = node => {
//       // capture root node value
//       result.push(node.value)
//         // if left child exists, go left again
//       if (node.left) traverse(node.left)
//         // if right child exists, go right again
//       if (node.right) traverse(node.right)
//     }

//     traverse(this.root)

//     return result
//   }

//   // post-order
//   // left, right, root
//   // 2, 12, 3, 28, 39, 36, 15
//   dfsPostOrder() {
//     let result = []

//     const traverse = node => {
//       // if left child exists, go left again
//       if (node.left) traverse(node.left)
//         // if right child exists, go right again
//       if (node.right) traverse(node.right)
//         // capture root node value
//       result.push(node.value)
//     }

//     traverse(this.root)

//     return result
//   }

//   // breadth first search - level by level

//   // use a queue!
//   // 15, 3, 36, 2, 12, 28, 39
//   bfs() {
//     let result = []
//     let queue = []

//     queue.push(this.root)

//     while (queue.length) {
//       let currentNode = queue.shift()

//       result.push(currentNode.value)

//       if (currentNode.left) {
//         queue.push(currentNode.left)
//       }
//       if (currentNode.right) {
//         queue.push(currentNode.right)
//       }
//     }

//     return result
//   }
// }






var twoSum = function(nums, target) {

  let index = [];
  for (let i = 0; i < nums.length; i++) {
    for (let s = 0; s < nums.length; s++) {
      if (s === 0 & i === 0) { continue }
      if (nums[i] + nums[i + s] === target) {
        index.push(i)
        index.push(i + s)
        return index
      }

    }

  }
}

6

console.log(twoSum([3, 2, 3], 6));