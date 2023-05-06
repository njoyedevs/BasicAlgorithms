
/* 
Return the fibonacci number at the nth position, recursively.

Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
The next number is found by adding up the two numbers before it,
starting with 0 and 1 as the first two numbers of the sequence.
*/

const num1 = 0;
const expected1 = 0;

const num2 = 1;
const expected2 = 1;

const num3 = 2;
const expected3 = 1;

const num4 = 3;
const expected4 = 2;

const num5 = 4;
const expected5 = 3;

const num6 = 8;
const expected6 = 21;

/**
 * Recursively finds the nth number in the fibonacci sequence.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num The position of the desired number in the fibonacci sequence.
 * @returns {number} The fibonacci number at the given position.
 */

// // Does not work past 1000 recursion limit, i.e. n = 610
function fibonacci(n) {

    if (n === 0 || n === 1) {
        // console.log(n)
        return n;
    } else {
        // console.log(`${n-1} and ${n-2}`)
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
const n = 21;
console.log(fibonacci(n));

// Does not work past 1000 recursion limit, i.e. n = 610
// function fibonacci(n, count = 0, sum = 0) {
//     count++;
//     console.log(`Calculating fibonacci(${n}), count=${count}, sum=${sum}`);
//     if (n === 0 || n === 1) {
//         sum += n;
//         console.log(`fibonacci(${n}) = ${n}, count=${count}, sum=${sum}`);
//         return { value: n, count, sum };
//     } else {
//         const first = fibonacci(n - 1, count, sum);
//         const second = fibonacci(n - 2, count, sum);
//         const value = first.value + second.value;
//         sum += value;
//         console.log(`fibonacci(${n}) = ${value}, count=${first.count + second.count + count}, sum=${sum}`);
//         return { value, count: first.count + second.count + count, sum };
//     }
// }

// const n = 8;
// const { value, count, sum } = fibonacci(n);
// console.log(`The ${n}th number in the Fibonacci sequence is ${value}, and it took ${count} recursive calls to calculate. The sum of the sequence up to this point is ${sum}.`);

// function fibonacci(num, memo) {
//     memo = memo || {};

//     if (memo[num]) return memo[num];
//     if (num <= 1) return num;

//     return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
// }

// console.log(fibonacci(610));

// Fibonacci
// Recursive Fib took 4.062600 milliseconds to run
// function recursiveFib(n) {
//     if (n < 2) {
//         return n;
//     }
//     return recursiveFib(n-1) + recursiveFib(n-2);
// }
// const { performance } = require('perf_hooks');
// const recursiveFibStart = performance.now();
// console.log(recursiveFib(20));
// console.log(`Recursive Fib took ${performance.now() - recursiveFibStart} milliseconds to run`);

// // Iterative Fib took 0.3268 milliseconds to run
// function iterativeFib(n) {
//     const vals = [0,1];
//     while (vals.length-1 < n) {
//         let len = vals.length;
//         vals.push(vals[len-1] + vals[len-2]);
//     }
//     console.log(n)
//     console.log(vals)
//     return vals[n];
// }
// const iterativeFibStart = performance.now();
// console.log(iterativeFib(20));
// console.log(`Iterative Fib took ${performance.now() - iterativeFibStart} milliseconds to run`);
