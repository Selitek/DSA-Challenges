function maxmizeProfit(arr){
    let max = 0;
    let buy = 0
    let sell = 1
    let profit
    while(sell < arr.length){
        if(arr[sell] < arr[buy]){
            buy = sell
            sell ++
        }
        else{
            profit = arr[sell] - arr[buy]
            max = Math.max(max,profit)
            sell ++
        }
        

    }
    return max
}
console.log(maxmizeProfit([7,1,5,3,6,4]))