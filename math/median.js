/**
 * Calculates the median of a given array of numbers.
 * If the array length is even, it returns the average of the two middle numbers.
 *
 * @param {number[]} arr - The array of numbers.
 * @return {number} - The median value.
 */
function median(arr) {
  const arrSorted = arr.sort((a, b) => a - b);
  return arrSorted.length % 2 === 0
    ? (arrSorted[arrSorted.length / 2 - 1] + arrSorted[arrSorted.length / 2]) /
        2
    : arrSorted[Math.floor(arrSorted.length / 2)];
}

module.exports = { median };
