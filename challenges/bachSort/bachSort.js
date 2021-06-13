function bachSort(array){
    for (let i = 0; i < array.length; i++) {

        for (let j = i+1; j < array.length; j++) {
            let min=i
          if (array[j]<array[min]) {
              min=j
          }
            let temp=array[min]
            array[min]=array[i]
            array[i]=temp
        }
        
    }
    return array

}

console.log(bachSort([3,6,4,5]));

module.exports=bachSort