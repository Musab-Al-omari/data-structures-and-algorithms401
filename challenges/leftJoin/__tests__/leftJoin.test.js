let hashTable = require('../../hashtable/hashtable.js')
let leetJoin = require('../left-join.js')



describe(' LEFT JOINs two hashmaps into a single data structure', () => {


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
    let ANSWERarray = leetJoin(firstHashTable, secondHashTable)

    // console.log(ANSWERarray, 'ANSWERarray', typeof ANSWERarray);
    it('the answer type is {}', () => {

        expect(typeof ANSWERarray).toBe("object")
    });

      it('same as the length of longest array', () => {
      
        expect(ANSWERarray.length).toEqual(firstHashTable.keysValues().length);
      });

      

});
