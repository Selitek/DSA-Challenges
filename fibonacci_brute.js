function fibonacci(n){
    let i = 0;
    let j = 1;
    let next = i + j;
    for(let iterator = 0; iterator < n - 1; iterator++){
        next = i + j;
        i = j;
        j = next;
    }
    return next;
}

//test cases
console.log(`fib of 2 ${fibonacci(2)}`)
console.log(`fib of 3 ${fibonacci(3)}`)
console.log(`fib of 4 ${fibonacci(4)}`)
console.log(`fib of 5 ${fibonacci(5)}`)
