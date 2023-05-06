// Array: Mode
// Create a function that, given an array of ints,
// returns the int that occurs most frequently in the array.
// What if there are multiple items that occur the same number of time?
//   - return all of them (in an array)
//   - what if all items occur the same number of times?
//     - return empty array
// */

const nums1 = [];
const expected1 = [];

const nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];

const nums4 = [5, 1, 4, 1];
const expected4 = [1];

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];

const nums6 = [1,5,6,9,2,2,2,2,2,2,2,2,5,5,5,5,5];
const expected6 = [2];

//  - order doesn't matter

/**
* Finds the mode or all modes if there are more than one. The mode is the
*    value which occurs the most times in the given array.
* - Time: O(?).
* - Space: O(?).
* @param {Array<number>} #nums Test
* @returns {Array<number>} # Mode or modes in any order.
*/
function mode(nums) {

    var dictionary  = {};

    console.log(nums);

    // Frequency Table
    for (var i=0;i<nums.length;i++){
        if (dictionary[nums[i]] == undefined){
            dictionary[nums[i]] = 1;
        } else {
            dictionary[nums[i]] += 1
        } 
    }
    console.log(dictionary)

    // assign a value guaranteed to be smaller than any number in the array
    let biggestValue = -1
    let biggestValuesKey = -1

    // finding the biggest value and its corresponding key
    Object.keys(dictionary).forEach(key => {
        let value = dictionary[key]
        if (value > biggestValue) {
            biggestValue = value
            biggestValuesKey = key
        }
    })

    // Find the keys for te biggest value
    let biggestValues = []
    Object.keys(dictionary).forEach(key => {
        let value = dictionary[key]
        if (value === biggestValue) {
            biggestValues.push(key)
        }
    })

    return biggestValues
}

console.log(mode(nums6))
