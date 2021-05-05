'use strict'

function BinarySearch(sortedArray, searchKey) {
  let low = 0
  let high = sortedArray.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)

    if (sortedArray[mid] === searchKey) {
      return mid
    }

    if (sortedArray[mid] > searchKey) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return -1

}
let a = [1, 2, 3, 4, 15, 20, 30, 40, 56, 77]
let b = 56
console.log(BinarySearch(a, b));