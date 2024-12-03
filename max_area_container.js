/*
Qn:
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/
function maximizeArea(arr){
    let i = 0;
    let j = arr.length - 1;
    let maxArea = 1;
    let width, height, currArea
    while(i < j){
        width = j - 1;
        height = Math.min(arr[i],arr[j])
        currArea = width * height
        maxArea = Math.max(currArea,maxArea)
        if(arr[i] < arr[j]){
            i++
        }
        else{
            j--
        }
    }
    return maxArea
}
console.log(maximizeArea([1,8,6,2,5,4,8,3,7]))

/*
forget to update the pointers or do that wrong, you will have the time of your life
*/