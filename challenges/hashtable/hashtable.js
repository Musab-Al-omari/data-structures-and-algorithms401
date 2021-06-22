// this.table[hashedkey] = linked list DS -> adding values to it

// linked list node 
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.root = null;
    }

    add(value) {
        const node = new Node(value);
        if (!this.root) {
            this.root = node;
        } else {
            const current = this.root;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

    getValues() {
        let current = this.root;
        const output = [];
        while (current) {
            output.push(current.value);
            current = current.next;
        }
        return output;
    }
}


class Hashtable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    hash(key) {

        const sum = key.split('').reduce((acc, v) => {

            return acc + v.charCodeAt(0)
        }, 0);

        // console.log("sum : ", sum);

        return (sum * 19) % this.size;
    }

    add(key, value) {

        const hashedIndex = this.hash(key);

        if (!this.table[hashedIndex]) {
            this.table[hashedIndex] = new LinkedList();
        }
        this.table[hashedIndex].add([key, value]); // store anything other than the object
    }


    contains(key) {
        const hashedIndex = this.hash(key);
        if (!this.table[hashedIndex]) {
            return false
        }
        let flag = false
        this.table[hashedIndex].getValues().forEach((obj) => {
            if (Object.keys(obj)[0] === key) {
                flag = true
            }
        })
        return flag
    }


    get(key) {
        const hashedIndex = this.hash(key);
        if (!this.table[hashedIndex]) {
            return 'the key not assign here'
        }

        let flag = 'the key not assign here'
        this.table[hashedIndex].getValues().forEach((obj) => {
            if (Object.keys(obj)[0] === key) {
                flag = Object.values(obj)[0]
            }
        })
        return flag
    }


    keysValues() {
        // declare an empty array for the keys
        const keys = [];
        // console.log( this.table);
        // iterate over the data array (I call a single array a "bucket")
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                keys.push(this.table[i].root.value)

            }

        }
        return keys;
    }




}



module.exports = Hashtable;