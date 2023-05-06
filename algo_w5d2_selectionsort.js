
arr = [100, 3, 6, 24, 66, 299, 445, 23, 6, 8]

function myFunction() {

    function selectionSort(arr) {
        for (let i = 0; i < arr.length; i++) {
            let minIndex = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            }
        }
        return arr;
    }

    return selectionSort(arr)

    // console.log(selectionSort(arr)

}

module.exports = myFunction;

// Not as fast
// function selectionSort2(arr) {
//     let timeComplexity = 0;
//     let spaceComplexity = arr.length;

//     for (let i = 0; i < arr.length; i++) {
//         let minIndex = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             timeComplexity++;
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }
//         if (minIndex !== i) {
//             [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//             spaceComplexity++;
//         }
//     }

//     console.log(`Time complexity: O(N^${timeComplexity/arr.length})`);
//     console.log(`Space complexity: O(N^${spaceComplexity/arr.length})`);

//     console.log('Hi')

//     return arr;
// }

// console.log(selectionSort2(arr))

// Neil Version
// function selectionSort(numbers = []) {
//     const len = numbers.length;
//     let selectedIdx = 0;
//     let idxOfCurrentMin = 0;

//     while (selectedIdx < len) {
//         for (let i = selectedIdx; i < len; i++) {
//             if (numbers[i] < numbers[idxOfCurrentMin]) {
//                 idxOfCurrentMin = i;
//             }
//         }

//         if (numbers[selectedIdx] !== numbers[idxOfCurrentMin]) {
//             // Swap.
//             [numbers[selectedIdx], numbers[idxOfCurrentMin]] = [numbers[idxOfCurrentMin], numbers[selectedIdx]];
//         }
//         selectedIdx += 1;
//         // reset idxOfCurrMin to the next selected index we are going to work with to find the next min
//         idxOfCurrentMin = selectedIdx;
//     }
//     return numbers;
// }