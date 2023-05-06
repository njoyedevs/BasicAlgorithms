const { performance } = require('perf_hooks');
const start = performance.now();


function quicksort(array, count={n:0}) {

    count.n++
    
    if (array.length <= 1) {
        return array;
    } else {
        var pivot = array[0];
        var left = [];
        var right = [];
        for (var i = 1; i < array.length; i++) {
            if (array[i] < pivot) {
                left.push(array[i]);
            } else {
                right.push(array[i]);
            }
        }

        // console.log(`Recursion Count:`, count)

        return quicksort(left, count).concat(pivot, quicksort(right, count));
    }
}
// var array = [10, 5, 2, 3, 7, 6, 8, 9, 1, 4];
n = 100000000
let randomArray = Array.from({length: n + 1}, (_, i) => i).sort(() => Math.random() - 0.5);
// randomArray = randomArray.slice(0,(randomArray.length-1)/2)
// console.log(randomArray.length)

const numbers1 = [11, 8, 14, 3, 6, 2, 7];
const expected1 = [2, 3, 6, 7, 8, 11, 14];

const numbers2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected2 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

const numbers3 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const expected3 = [2, 3, 3, 3, 6, 7, 8, 11, 14];

const numbers4 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected4 = [1, 3, 4, 9, 12, 13, 17, 21, 27];
console.log(randomArray)

var sortedArray = quicksort(randomArray);
console.log(sortedArray);

console.log(`This took ${performance.now() - start} milliseconds to run`);
console.log(`This took ${(performance.now() - start)/1000} seconds to run`);
console.log(`This took ${((performance.now() - start)/1000)/60} minutes to run`);
