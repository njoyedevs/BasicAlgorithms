/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numbersA1 = [0, 1, 2, 2, 2, 7];
const numbersB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numbersA2 = [0, 1, 2, 2, 2, 7];
const numbersB2 = [2, 2];
const expected2 = [2];

const numbersA3 = [0, 1, 2, 2, 2, 7];
const numbersB3 = [10];
const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(n) linear, n = max(sortedA.length, sortedB.length) when there are
 *    dupes we may end up looping over all items of longer arr.
 * - Space: O(n) linear, n = shorter array length.
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    de-duped.
 */

n1 = 50;
n2 = 30

const randomArray1 = Array.from({ length: n1 + 1 }, (_, i) => i).sort(() => Math.random() - 0.5);
// randomArray1 = randomArray1.slice(0,randomArray1.length/2)
const randomArray2 = Array.from({ length: n2 + 1 }, (_, i) => i).sort(() => Math.random() - 0.5);
// randomArray2 = randomArray2.slice(0,randomArray2.length/2)

/**
 * Efficiently combine the two sorted arrays into a new array that is the a
 * sorted set intersection.
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    de-duped.
 */

function orderedIntersection(sortedA, sortedB) {
    let idxA = 0;
    let idxB = 0;

    const intersection = [];

    while (idxA < sortedA.length && idxB < sortedB.length) {
        if (sortedA[idxA] === sortedB[idxB]) {
            if (intersection[intersection.length - 1] !== sortedA[idxA]) {
                // add it only if the last num added isn't the same num
                intersection.push(sortedA[idxA]);
            }
            idxA++;
            idxB++;
        } else if (sortedA[idxA] < sortedB[idxB]) {
            idxA++;
        } else {
            idxB++;
        }
    }
    return intersection;
}

// function orderedIntersection(sortedA, sortedB) {

//     console.log(sortedA);
//     console.log(sortedB);

//     // Variable declaration
//     const dictionary = {}
//     const newArray = []
//     const nums = sortedA
//     const list = [sortedA, sortedB]

//     // Great a frequency table with sortedA
//     for (var i = 0; i < sortedA.length; i++) {
//         // if dictionary includes item in sortedA
//         if (Object.keys(dictionary).includes(`${sortedA[i]}`)) {
//             // increment dictionary value at sortedB[i] key
//             dictionary[`${sortedA[i]}`]++
//         } else {
//             // If not in dictionary then add with value set at 1
//             dictionary[`${sortedA[i]}`] = 1
//         }
//     }

//     // Great a frequency table with sortedB
//     for (var i = 0; i < sortedB.length; i++) {
//         // if dictionary includes item in sortedB
//         if (Object.keys(dictionary).includes(`${sortedB[i]}`)) {
//             // increment dictionary value at sortedB[i] key
//             dictionary[`${sortedB[i]}`]++
//         }
//     }

//     // Loop through key, value pairs in dictionary
//     for (const [key, value] of Object.entries(dictionary)) {
//         // if value is greate than 1 AND if sortedA includes key as integer
//         if (value > 1 && sortedA.includes(parseInt(key))) {
//             // if sortedB includes key as integer
//             if (sortedB.includes(parseInt(parseInt(key))))
//                 // push to newArray
//                 newArray.push(parseInt(key))
//         }
//     }

//     console.log(newArray)

// }

// orderedIntersection(numbersA1, numbersB1)
// orderedIntersection(numbersA2, numbersB2)
// orderedIntersection(numbersA3, numbersB3)
// orderedIntersection(randomArray1, randomArray2)