'use strict'



function repeatedWord(string) {
    let wordArray = string.split(' ')

    let newObj = {}

    for (let i = 0; i < wordArray.length; i++) {
        if (!newObj[wordArray[i]]) {

            newObj[wordArray[i]] = 1
        } else {

            newObj[wordArray[i]] = newObj[wordArray[i]] + 1;
        }
    }

   

    let number = 0;
    let arrayOFarray = Object.entries(newObj)

    arrayOFarray.forEach(arr => {

        if (arr[1] > number) {
            number = arr[1];


        }
    })

    let words = ''
    for (let i = 0; i < arrayOFarray.length; i++) {

        if (arrayOFarray[i][1] === number) {
            words = `${arrayOFarray[i][0]}  ${words} `
        }
    }


    return words

}







let myString = "hi my name in my  my lovely mosab he he he "
console.log(repeatedWord(myString));

module.exports = repeatedWord;