/**
 * The lomuto partition scheme does on average 3x more swaps than Hoare's
 * scheme.
 * @param {Array<number>} numbers
 * @param {number} low Start of section to partition.
 * @param {number} hi End of section to partition.
 */
function partitionLomuto(numbers = [], low = 0, hi = numbers.length - 1) {
    const pivot = numbers[hi];
    let i = low - 1;

    for (let j = low; j < hi; j++) {
        if (numbers[j] <= pivot) {
            i += 1;
            [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
        }
    }

    // final swap of pivot into correct position
    [numbers[i + 1], numbers[hi]] = [numbers[hi], numbers[i + 1]];
    return i + 1;
}

module.exports = {
    partition: partition,
    partitionLomuto: partitionLomuto,
};