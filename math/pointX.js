/**
 * Calculates where the pint is when x = n
 *
 * @param {number} [x=3] - The x value of the original point.
 * @param {number} [y=4] - The y value of the original point.
 * @param {number} [n=1] - The x value to calculate the y value for.
 * @return {number} - The median value.
 */
function pointX(x = 3, y = 4, n = 1) {
  let px = 2 * n - x;
  let py = y;
  let result = `(${px},${py})`;
  return result;
}
// \left(2c-px,p_{ointy3}\right)
module.exports = { pointX };
