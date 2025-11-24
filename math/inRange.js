/**
 * If the value is between x and y
 *
 * @param {number} [x=0] The min range of the number || Defaults is 0.
 * @param {number} [y=10] The max range of the number || Defaults is 10.
 * @param {number} [value=1] The value to check || Defaults = 1
 */

function inRange(x = 0, y = 10, value = 1) {
  if (value >= x && value <= y) {
    return true;
  } else {
    return false;
  }
}

module.exports = { inRange };
