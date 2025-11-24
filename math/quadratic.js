/**
 * Get the solution of ax^2 + bx + c = 0
 * @param {number} [a=1] - The value of a
 * @param {number} [b=4] - The value of b
 * @param {number} [c=3] - The value of c
 * @returns {Array}
 */

function quadratic(a = 1, b = 4, c = 3) {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    return "Invalid Values for a, b, and c";
  } else if (a === 0) {
    return "a can't be 0";
  }
  let d = b ** 2 - 4 * a * c;
  let sq = Math.sqrt(d);
  if (d < 0) {
    let r = -b / (2 * a);
    let i = Math.sqrt(-d) / (2 * a);

    return `${r} ± ${i}i`;
  } else if (d === 0) {
    let omx = -b - sq;
    let index = omx / (2 * a);
    return [index];
  }
  let mx = -b - sq;
  let px = -b + sq;
  let index1 = px / (2 * a);
  let index2 = mx / (2 * a);
  return [index1, index2];
}

module.exports = { quadratic };
