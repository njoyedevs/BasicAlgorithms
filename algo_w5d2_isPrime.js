///// This is the long version /////////////////
// Number.prototype.isPrime = function () {
//     for (let i = 2; i < this; i++) {
//         if (this % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }


// const { performance } = require('perf_hooks');
// const start = performance.now();
// let primeCount = 0;
// let num = 2; // for math reasons, 1 is considered prime
// while (primeCount < num^2) {
//     if (num.isPrime()) {
//         primeCount++;
//     }
//     num++;
// }
// console.log(`The 10,000th prime number is ${num - 1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);

////// This is the short version //////////////////
// Number.prototype.isPrime = function () {
//     for (let i = 2; i < this; i++) {
//         if (this % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }


// const { performance } = require('perf_hooks');
// const start = performance.now();
// let primeCount = 0;
// let num = 2; // for math reasons, 1 is considered prime
// while (primeCount < 1e4) {
//     if (num.isPrime()) {
//         primeCount++;
//     }
//     num++;
// }
// console.log(`The 10,000th prime number is ${num - 1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);

// This is a chatgpt version - FASTEST /////////////////////////
// const { performance } = require('perf_hooks');
// const start = performance.now();
// let primeCount = 0;
// let num = 2;
// let primes = [];
// while (primeCount < 1e5) {
//     let isPrime = true;
//     for (let prime of primes) {
//         if (num % prime === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         primes.push(num);
//         primeCount++;
//     }
//     num++;
// }
// console.log(primes)
// console.log(`The 10,000th prime number is ${primes[primes.length - 1]}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);

// // Primes
Number.prototype.isPrime = function () {

    // If you only need to count to the sqrt of num
    for (let i = 2; i < Math.sqrt(this); i++) {
        if (this % i === 0) {
            return false;
        }
    }
    return true;

}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while (primeCount < 1e4) {
    if (num.isPrime()) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);