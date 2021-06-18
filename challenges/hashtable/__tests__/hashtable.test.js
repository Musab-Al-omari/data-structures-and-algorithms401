const Hashtable = require('../hashtable.js')





describe('hash table test', () => {
    const myhashtable = new Hashtable(1024); /*(2^10 = 1024) */
    myhashtable.set('bucket', 'Ishaq');
    myhashtable.set('melon', 'water');
    myhashtable.set('lemon', 'not-water');
    myhashtable.set('abzy', 'musab1');
    myhashtable.set('cdxw', 'musab2');


    // console.log("myhashtable hashed ----> ", myhashtable.hashed)

    // console.log(myhashtable);

    // myhashtable.table.forEach(location => {
    //     if (location) {
    //         console.log("....location values--> ", location.getValues());
    //     }
    // });

    // console.log(myhashtable.get('cdxw'));





    it('should return the true if the key existed', () => {


        expect(myhashtable.contains('cdxw')).toEqual(true)

    })
    it('should return the false if the key existed', () => {


        expect(myhashtable.contains('cdsdxw')).toEqual(false)

    })
    it('should return the the value of the key  if the key existed', () => {


        expect(myhashtable.get('melon')).toEqual('water')

    })
    it('should return the key not assign here', () => {


        expect(myhashtable.get('cdsdxw')).toEqual('the key not assign here')

    })

})
