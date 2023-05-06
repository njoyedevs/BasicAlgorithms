const { partition } = require('../partition');

/**
 * Iteratively sorts the given array in-place by mutating the array. This is
 * faster than recursion because it's the same iterations but fewer function
 * calls.
 * Best: O(n log(n)) linearithmic.
 * Average: O(n log(n)) linearithmic.
 * Worst: O(n^2) quadratic.
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization.
 * @param {Array<number>} numbers
 * @param {number} left The index indicating the start of the slice of the
 *    given array being processed.
 * @param {number} right The index indicating the end of the slice of the
 *    given array being processed.
 * @returns {Array<number>} The given array after being sorted.
 */
function quickerSort(numbers = [], left = 0, right = numbers.length - 1) {
    const stack = [
        {
            leftIdx: left,
            rightIdx: right,
        },
    ];

    while (stack.length > 0) {
        const { leftIdx, rightIdx } = stack.pop();

        if (leftIdx < rightIdx) {
            const pivotIndex = partition(numbers, leftIdx, rightIdx);

            /* 
            Each item popped will result in 2 being pushed for the left and right
            side (and each left and right side has it's own left and right side)
            which mirrors how the two recursive function calls branch.
            */
            stack.push(
                {
                    leftIdx,
                    rightIdx: pivotIndex,
                },
                {
                    leftIdx: pivotIndex + 1,
                    rightIdx,
                }
            );
        }
    }

    return numbers;
}