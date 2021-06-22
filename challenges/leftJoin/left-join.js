const hashTable = require('../hashtable/hashtable.js')


let firstHashTable = new hashTable(1024)
    firstHashTable.add('fond', 'enamored');
    firstHashTable.add('wrath', 'anger');
    firstHashTable.add('diligent', 'employed');
    firstHashTable.add('outfit', 'garb');
    firstHashTable.add('guide', 'usher');
    let secondHashTable = new hashTable(1024)
    secondHashTable.add('fond', 'averse');
    secondHashTable.add('wrath', 'delight');
    secondHashTable.add('diligent', 'idle');
    secondHashTable.add('guide', 'jam');
    // let ANSWERarray = leetJoin(firstHashTable, secondHashTable)

function leetJoin(hashFirst, hashSecond) {
let firstArray=hashFirst.keysValues()
let secondArray=hashSecond.keysValues()
let result=[]
for (let i = 0; i < firstArray.length; i++) {
    let flag=true
    for (let j = 0; j < secondArray.length; j++) {
        if (firstArray[i][0]===secondArray[j][0]) {
            flag=false
            result.push([firstArray[i][0],firstArray[i][1],secondArray[j][1]])
        }    
    }
    if (flag) {
        result.push([firstArray[i][0],firstArray[i][1],null])
    } 
}
return result

}

// console.log(leetJoin(firstHashTable,secondHashTable));



module.exports= leetJoin