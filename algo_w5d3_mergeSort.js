// function mergeSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }

//     const mid = Math.floor(arr.length / 2);
//     console.log(mid)
//     const leftArr = mergeSort(arr.slice(0, mid));
//     const rightArr = mergeSort(arr.slice(mid));

//     const result = [];
//     let leftIdx = 0;
//     let rightIdx = 0;

//     while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
//         if (leftArr[leftIdx] <= rightArr[rightIdx]) {
//             console.log(`${leftArr[leftIdx]}-${rightArr[rightIdx]}`)
//             result.push(leftArr[leftIdx]);
//             leftIdx++;
//         } else {
//             console.log(`${rightArr[rightIdx]}`)
//             result.push(rightArr[rightIdx]);
//             rightIdx++;
//         }
//     }

//     console.log(result)

//     return result.concat(leftArr.slice(leftIdx)).concat(rightArr.slice(rightIdx));
// }

// console.log(mergeSort([1, 5, 78, 3, 87, 33, 6, 23, 788, 43, 4, 56, 2]))

function mergeSort2() {

    /* 
    Stable sort.
    Visualization:
    https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
    Time Complexity
        - Best case: O(n log(n)) linearithmic.
        - Average case: O(n log(n)) linearithmic.
        - Worst case: O(n log(n)) linearithmic.
    Space: O(n) linear
    steps:
        1. create a merge function to merge two already sorted arrays into a single
            sorted array.
        - you do NOT need to work in place, ok to use a new array
        2. create mergeSort function to sort the provided array
        - split the array in half and recursively merge the halves using the
            previously created merge function.
        - splitting of arrays stops when array can no longer be split.
        - an array of 1 item is by definition sorted, so two arrays of 1 item
            can therefore be merged into a sorted array.
    */

    // merge
    const sortedA1 = [];
    const sortedB1 = [];
    const expectedMerge1 = [];

    const sortedA2 = [5];
    const sortedB2 = [2];
    const expectedMerge2 = [2, 5];

    const sortedA3 = [3];
    const sortedB3 = [2, 3, 4, 7];
    const expectedMerge3 = [2, 3, 3, 4, 7];

    const sortedA4 = [1, 2, 4, 5, 6, 9];
    const sortedB4 = [3, 7, 8, 10];
    const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    /**
     * Efficiently merges two already sorted arrays into a new sorted array.
     * Do not mutate the given arrays.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Array<number>} left
     * @param {Array<number>} right
     * @returns {Array<number>} A new sorted array containing all the elements of
     *    both given halves.
     */
    function merge(left = [], right = []) {

        // console.log(sortedA4)
        // console.log(sortedB4)

        let result = [];
        let indexLeft = 0;
        let indexRight = 0;


        // While the arrays still have contents != .length of 0
        while (indexLeft < left.length && indexRight < right.length) {

            // console.log(left[indexLeft])
            // console.log(right[indexRight])

            // Compare the first index of each array (right, left)
            if (left[indexLeft] < right[indexRight]) {
                // if left is smaller we chop off the first index and the push to array
                result.push(left[indexLeft]);
                indexLeft++;
            } else {
                // if left is smaller we chop off the first index and the push to array
                result.push(right[indexRight]);
                indexRight++
            }
        }

        // in case one of the arrays has remaining items due to unequal lengths, all of those can be added
        while (indexLeft < left.length) {
            result.push(left[indexLeft]);
            indexLeft++;
        }

        while (indexRight < right.length) {
            result.push(right[indexRight]);
            indexRight++;
        }

        return result
    }

    // console.log(merge(sortedA4, sortedB4))

    // mergeSort
    const numbersOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const numbersRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
    const numbersReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    /**
     * Creates a new sorted array based on the given numbers being recursively split
     * and merged.
     * Best: O(n log(n)) linearithmic.
     * Avg: O(n log(n)) linearithmic.
     * Worst: O(n log(n)) linearithmic.
     * @param {Array<number>} numbers
     * @returns {Array<number>} A New sorted array.
     */
    function mergeSort(numbers = []) {

        // console.log(numbers)

        // Return numbers if the length is less than 1.  This should return the recursion when at bottom
        if (numbers.length <= 1) {
            return numbers;
        }

        // Find middle index
        const middleIdx = Math.floor(numbers.length / 2);
        // console.log(middleIdx);

        // Slice the numbers array at middleIdx and insert left slice into left variable
        const left = numbers.slice(0, middleIdx);
        // console.log(left);

        // Slice the numbers array at middleIdx and insert everything right of middleIdx into right variable
        const right = numbers.slice(middleIdx)
        // console.log(right);

        // recursively call mergeSort in order to split the left and right arrays all the way down to the length of 1 for each array
        const leftMergeSort = mergeSort(left);
        const rightMergeSort = mergeSort(right);

        // Send the resulting arrays to merge to create the final array and the re
        return merge(leftMergeSort, rightMergeSort)

    }

    return mergeSort(numbersRandomOrder)
}
