function quickSort(arr){
    if(arr.length == 0 || arr.length == 1){
        return arr
    }
    let j = 0;
    let i = j-1;
    let pivot = arr[arr.length - 1]
    while(j < arr.length - 1){
        if(arr[j] < pivot){
            i++
            let temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
            
        }
        j++
    }
    let boundary = i + 1;
    let leftArray = arr.slice(0,boundary)
 /* fail to correctly put the left and right boundary here;
  trust me you will have spiritual transformation, lol */ 
    let righArray = arr.slice(boundary , arr.length - 1)

    return [...quickSort(leftArray),pivot,...quickSort(righArray)]

}

let sortedArray = quickSort([0,1])

console.log(sortedArray)