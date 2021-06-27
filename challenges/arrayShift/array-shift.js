'use strict'

let array = [2, 4, 6, 8, 10]
let value = 7

function insertShiftArray(arr, val) {
    arr[arr.length] = val

// i got this code from https://stackoverflow.com/questions/16243366/sorting-array-with-numbers-without-sort-method
    let done = false;
    while (!done) {
        done = true;
        for (let i = 1; i < arr.length; i++) {

            if (arr[i - 1] > arr[i]) {
                done = false;
                let tmp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = tmp;

            }
        }
    }

  

}
insertShiftArray(array, value)