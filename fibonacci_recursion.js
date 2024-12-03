let memo = {}
function fibonacci(n){
    if(n == 1 || n == 0){
        return n
    }
    if(memo.n){
        return memo.n
    }
   let result = fibonacci(n-1) + fibonacci(n-2)
    memo[n] = result
    debugger
    return result
}

//test cases
console.log(`fib of 2 ${fibonacci(2)}`)
console.log(`fib of 3 ${fibonacci(3)}`)
console.log(`fib of 4 ${fibonacci(4)}`)
console.log(`fib of 5 ${fibonacci(5)}`)