// ​ALGORITHM Merge(left, right, arr)
//     DECLARE i <-- 0
//     DECLARE j <-- 0
//     DECLARE k <-- 0
//     while i < left.length && j < right.length
//         if left[i] <= right[j]
//             arr[k] <-- left[i]
//             i <-- i + 1
//         else
//             arr[k] <-- right[j]
//             j <-- j + 1
//         k <-- k + 1
//     if i = left.length
//        set remaining entries in arr to remaining values in right
//     else
//        set remaining entries in arr to remaining values in left



const mergeSort = (array) => {
    let n = array.length
    if (n > 1) {
        let mid = Math.ceil(n / 2)
        let left=[];
        let right=[];
        for (let i = 0; i <n; i++) {
            if (i<mid) {
                left.push(array[i])
            }else{
                right.push(array[i])
            }   
        }
        mergeSort(left)
        mergeSort(right)
        Merge(left, right, array)
    }
    return array

}

function Merge(left, right, array) {
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            array[k] = left[i]
            i++

        } else {
            array[k] = right[j]
            j++
        }
        k++
    }
    if (i === left.length) {
        array[k] = right[j];
        j++;
        k++;
      } else {
        array[k] = left[i];
        i++;
        k++;
      }
    


}


// while i < left.length && j < right.length
//         if left[i] <= right[j]
//             arr[k] <-- left[i]
//             i <-- i + 1
//         else
//             arr[k] <-- right[j]
//             j <-- j + 1
console.log(mergeSort([3, 6, 5, 8, 9]));