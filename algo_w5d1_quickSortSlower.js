const { performance } = require('perf_hooks');
const start = performance.now();

n = 1000

const randomArray = Array.from({length: n + 1}, (_, i) => i).sort(() => Math.random() - 0.5);
// console.log(randomArray)

function quickSort(arr, low = 0, high = arr.length - 1) {
    while (low < high) {
        const pivotIndex = partition(arr, low, high);
        if (pivotIndex - low < high - pivotIndex) {
            quickSort(arr, low, pivotIndex - 1);
            low = pivotIndex + 1;
        } else {
            quickSort(arr, pivotIndex + 1, high);
            high = pivotIndex - 1;
        }
    }
    return arr;
}

function partition(arr, low, high) {
    const pivotValue = arr[high];
    let pivotIndex = low;
    for (let i = low; i < high; i++) {
        if (arr[i] < pivotValue) {
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            pivotIndex++;
        }
    }
    [arr[pivotIndex], arr[high]] = [arr[high], arr[pivotIndex]];
    return pivotIndex;
}

console.log(quickSort(randomArray))

console.log(`This took ${performance.now() - start} milliseconds to run`);