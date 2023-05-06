/*
    Input: arr, callback
    Output: arr (with elements removed)
    Remove every element in the array, starting from idx 0,
    until the callback function returns true when passed the
    iterated element.
    Return an empty array if the callback never returns true
    */

const numbers1 = [1, 4, 3, 6, 9, 15];
const callback1 = (elem) => {
    return elem > 5;
};
const expected1 = [6, 9, 15];

const numbers2 = [...numbers1];
const callback2 = (elem) => {
    return elem > 2;
};
const expected2 = [4, 3, 6, 9, 15];

const numbers3 = [...numbers1];
const callback3 = (elem) => false;
const expected3 = [];

/**
 * Removes every element in the array, starting from idx 0 until the callback
 * function returns true when passed the iterated element.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr
 * @callback cb A callback function that expects to receive an array element.
 * @returns {Array<any>} The given array with only the remaining items.
 */
function dropIt(arr, cb) {

    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            arr.splice(0, i);
            return (arr)
        }
    }

    arr.splice(0, arr.length);
    return arr;
}

function dropItFunctional(arr, callback) {
    const delCount = arr.findIndex((elem) => callback(elem) === true);
    arr.splice(0, delCount === -1 ? arr.length : delCount);
    return arr;
}

console.log('Test1')
console.log(dropIt(numbers1, callback1))
console.log('Test2')
console.log(dropIt(numbers2, callback2))
console.log('Test3')
console.log(dropIt(numbers3, callback3))