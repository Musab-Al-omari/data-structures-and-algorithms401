'use strict';
let j = 1
function quickSort(array, left, right) {
    if (left < right) {
        let position = Partition(array, left, right);
        quickSort(array, left, position - 1);
        quickSort(array, position + 1, right);
    }
    return array;
}
// left=2 right=4 low=2
// left=2 right=5 low=1
// left=2 right=4 low=00
// left=2 right=4low=2
// left=2 right=4 low=9

function Partition(array, left, right) {

    let pivot = array[right];
    let low = left - 1;
    for (let i = left; i < right; i++) {
        if (array[i] <= pivot) {
            low++;
            Swap(array, i, low);
        }
    }
    Swap(array, right, low + 1);
    console.log(`this is ${j}times`, array, low, 'low pls ', low + 1);
    j++
    return low + 1;
}
function Swap(array, i, low) {
    let temp;
    temp = array[i];
    array[i] = array[low];
    array[low] = temp;
}

console.log(quickSort([5, 6, 3, 2, 4, 9], 0, 5));
// console.log(quickSort([3, 2, 1], 0, 2));

module.exports = quickSort;