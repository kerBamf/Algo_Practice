// Memoization
// Use a js object, keys being the argument to the function, and values being the return value of the function


// const fib = (n, memo = {}) => {
//     if (n in memo) return memo[n]
//     if (n <= 2) return 1;
//     memo[n] = fib(n - 1, memo) + fib(n-2, memo)
//     return memo[n];
// }

// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));
// console.log(fib(50));


const gridTraveler = (m, n, memo = new Map()) => {
    if (m === 0 || n === 0) return 0
    if (m === 1 && n === 1) return 1
    if (memo.has([m, n]) || memo.has([n, m])) return memo[[m, n]]
    memo.set([m, n], (gridTraveler(m, n-1, memo) + gridTraveler(m-1, n, memo)))
    return memo[[m, n]];
}

console.log(gridTraveler(1, 1))
console.log(gridTraveler(2, 3))
console.log(gridTraveler(3, 3))
console.log(gridTraveler(3, 4))
console.log(gridTraveler(18, 18))