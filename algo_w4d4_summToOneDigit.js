/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.
  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

// 4910 - 131 - 41 - 5 
const num4 = 139055
const expected4 = 5

//  11 - 2
const num5 = 56
const expected5 = 2

/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit(num) {

    // Catches incoming NaN values that would break logic
    if(!Number.isInteger(num)) { return "Argument must be a number" }

    // Base case: checks if number is a single digit; if so, it returns the single digit
    if(num.toString().length <= 1) { return num }
    console.log(`String Length: ${num.toString().length}`)

    // The recursive call inside the argument provides the base logic; num % 10 gets the last digit in the number, Math.floor(num / 10) gets the remaining digits, and passes that value recursively
    // The outer recursive call ensures that if the original given value resolves to a number with more than one digit, it passes that value back through until it does
    console.log(`Num = ${num}`)
    console.log(`Floor = ${Math.floor(num)}`)
    console.log(`Math.floor(num/10): ${Math.floor(num / 10)}`)
    console.log(`num % 10: ${num % 10}`)
    return sumToOneDigit(sumToOneDigit(Math.floor(num / 10)) + (num % 10))
}

console.log(`Starting Number: ${num4}`)
console.log(`Solution: ${sumToOneDigit(num4)}`)