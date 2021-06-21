const {BinaryTree}=require('../tree/tree.js')

let first =new BinaryTree(1)
let second =new BinaryTree(2)
function matches(treeOne,treeTow){

    let  firstTree= treeOne.preOrder()

    let  secondTree= treeTow.preOrder() 

    let matches = [];
    for ( let i = 0; i < firstTree.length; i++ ) {
        for ( let e = 0; e < secondTree.length; e++ ) {
            if ( firstTree[i] === secondTree[e] ) {

                       matches.push( firstTree[i] );

            }
        }
    }
    return matches;   

}

console.log(first);
console.log(second);


