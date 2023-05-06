/*
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    Bonus: Make it O(n) time
    */

    const numbers1 = [2, 11, 7, 15];
    const targetSum1 = 9;
    const expected1 = [0, 2];
    // Explanation: numbers[0] + numbers[2] = 2 + 7 = 9. Return order doesn't matter.

    const numbers2 = [10, 3, 2, 5, 4, -1];
    const targetSum2 = 6;
    const expected2 = [2, 4];

    const numbers3 = [3, 8, 4, 1, 9, 0, -2];
    const targetSum3 = 6;
    const expected3 = [1, 6];

    /**
     * Finds the indexes of the numbers that add up to the given target sum.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Array<number>} numbers Unordered numbers.
     * @param {number} targetSum
     * @returns {Array<number>} The two indexes of the numbers in the given numbers
     *    that add up to the targetSum.
     */
    function twoSum(numbers, targetSum) {

        const numsTable = {};

        for (let i = 0; i < numbers.length; i++) {
            let complement = targetSum - numbers[i];
            if (complement in numsTable) {
                return [numsTable[complement], i];
            }

            numsTable[numbers[i]] = i;
        } 
        console.log(numsTable)
        
        return [];
    }
    console.log('Test 1')
    console.log(twoSum(numbers1, targetSum1))
    console.log('Test 2')
    console.log(twoSum(numbers2, targetSum2))
    console.log('Test 3')
    console.log(twoSum(numbers3, targetSum3))
    console.log('-----------------------------')



// Our Group
// function twoSum(numbers, targetSum) {
//     console.log(numbers);
//     console.log(targetSum);

//     const sortedNums = numbers.map((value, index) => ({ value, index })).sort((a, b) => a.value - b.value);
//     console.log(sortedNums);

//     let left = 0;
//     let right = sortedNums.length-1;

//     while (left < right) {
//         const sum = sortedNums[left].value + sortedNums[right].value;

//         if (sum === targetSum) {
//             return [sortedNums[left].index, sortedNums[right].index];
//         } else if (sum < targetSum) {
//             left++;
//         } else {
//             right--;
//         }
//     }
// }