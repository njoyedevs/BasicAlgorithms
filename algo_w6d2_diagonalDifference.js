/* 
Given a square matrix (2d array) of integers
Calculate the absolute difference between the sums of its diagonals
- top left to bottom right diagonal
- top right to bottom left diagonal
*/

const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
const expected1 = 2;
/* 
left to right diagonal: 1 + 5 + 9 = 15
right to left diagonal: 3 + 5 + 9 = 17
absolute difference = 2
*/

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
absolute difference = 0
*/

/**
 * Calculates the absolute diagonal difference of a square matrix.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
 *    a square matrix (rows and columns).
 * @returns {number} Represents the absolute difference between the top left to
 *    bottom right diagonal and the top right to bottom left diagonal.
 */
// function diagonalDifference(sqrMatrix) {
//     // console.log(sqrMatrix)

//     //  Initialize sum variables
//     let leftRightSum = 0;
//     let RightleftSum = 0;

//     // Creat two pointers for i and j to cross left and right
//     for (let i = 0; i < sqrMatrix.length; i++) {
//         for (let j = 0; j < sqrMatrix.length; j++) {

//             // Sum leftrightsum by verifying i==j, or (0,0 1,1 2,2 3,3 4,4)
//             if (i === j) {
//                 // console.log(squareMatrix1[i][j]);
//                 leftRightSum += sqrMatrix[i][j];
//             }

//             // Sum rightleftsum by verifying squareMatrix1
//             if (i === sqrMatrix.length - j - 1) {
//                 RightleftSum += sqrMatrix[i][j];
//             }
//         }
//     }

//     // console.log(leftRightSum)
//     // console.log(RightleftSum)

//     return Math.abs( leftRightSum - RightleftSum )
// }

function diagonalDifference(sqrMatrix) {
    let ltrSum = 0;
    let rtlSum = 0;

    for (let i = 0; i < sqrMatrix.length; i++) {
        const row = sqrMatrix[i];
        ltrSum += row[i];
        rtlSum += row[row.length - i - 1];
    }
    return Math.abs(ltrSum - rtlSum);
}

/**
 * - Time: O(n) linear.
 * - Space: O(1) constant.
 */
const functionalDiagonalDifference = (sqrMatrix) =>
    Math.abs(sqrMatrix.reduce((diff, row, i) => diff + row[i] - row[row.length - i - 1], 0));

console.log(diagonalDifference(squareMatrix1))
console.log(diagonalDifference(squareMatrix2))