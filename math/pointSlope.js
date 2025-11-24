/**
 * pointSlop is a function in where you can get the formula: y=mx+b with only 2 points.
 * @param {number} x1 - The x value of the first point.
 * @param {number} y1 - The y value of the first point.
 * @param {number} x2 - The x value of the second point.
 * @param {number} y2 - The y value of the second point.
 */

function pointSlope(x1, y1, x2, y2) {
  if (
    x1 === "" ||
    y1 === "" ||
    x2 === "" ||
    (y2 === "" && x1 instanceof Number) ||
    y1 instanceof Number ||
    x2 instanceof Number ||
    y2 instanceof Number
  ) {
    return "One of the Value is either is not a number or is empty!";
  } else if (x1 - x2 === 0 || x2 - x1 === 0) {
    return "Sorry that is a invalid equation";
  }
  let m = (y2 - y1) / (x2 - x1);
  let b = y1 - m * x1;
  return `y = ${m}*x + ${b}`;
}

module.exports = { pointSlope };
