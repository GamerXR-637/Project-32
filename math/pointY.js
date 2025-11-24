/**
 * Calculates where the p0int is when y = n
 *
 * @param {number} [x=3] - The x value of the original point.
 * @param {number} [y=4] - The y value of the original point.
 * @param {number} [n=1] - The x value to calculate the y value for.
 * @return {number} - The median value.
 */
function pointY(x = 3, y = 4, n = 1) {
  let py = 2 * n - y;
  let px = x;
  let result = `(${px},${py})`;
  return result;
}

module.exports = { pointY };
