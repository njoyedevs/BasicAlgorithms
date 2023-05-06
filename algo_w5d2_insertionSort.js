arr = [7, 3, 9, 4, 23, 57, 1, 86, 4, 67, 9]

function myFunction() {

    // My version
    function insertionSort(arr) {
        for (let i = 1; i < arr.length; i++) {
            for (let j = i; j > 0 && arr[j - 1] > arr[j]; j--) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            }
        }
        return arr;

    }

    return insertionSort(arr)

    // Neil Versions
    function insertionSort(numbers = []) {
        for (let i = 1; i < numbers.length; i++) {
            // save the current 'target' so this space is available to use for shifting
            let numToInsert = numbers[i];
            let leftIdx = i - 1;

            while (leftIdx >= 0 && numbers[leftIdx] > numToInsert) {
                // shift to the right because it's greater than the item we are going to insert
                numbers[leftIdx + 1] = numbers[leftIdx];
                leftIdx--;
            }
            // shifting complete, insert position located
            numbers[leftIdx + 1] = numToInsert;
        }
        return numbers;
    }

    function insertionSortSwap(numbers = []) {
        for (let i = 1; i < numbers.length; i++) {
            let currIdx = i; // to avoid altering i directly
            let leftIdx = currIdx - 1; // compare to the left

            while (leftIdx >= 0 && numbers[leftIdx] > numbers[currIdx]) {
                // destructure swap notation
                [numbers[leftIdx], numbers[currIdx]] = [numbers[currIdx], numbers[leftIdx]];

                // curr got swapped to the left, so currIdx is now 1 to the left
                currIdx--;
                leftIdx = currIdx - 1;
            }
        }
        return numbers;
    }

    // Diya Version
    function insertionSort(numbers = []) {
        const len = numbers.length
        for (let i = 1; i < len ; i++) {
            let minIndex = numbers[i];
            let j = i - 1;
            while (j >= 0 && numbers[j] > minIndex) {
                numbers[j + 1] = numbers[j];
                j--;
            }
            numbers[j + 1] = minIndex;
        }
        return numbers;
    }

}

// console.log(insertionSort(arr))

module.exports = myFunction;