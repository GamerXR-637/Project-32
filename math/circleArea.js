/**
 * Find the area of a circle
 *
 * @param {number} [radius=3]  The radius of the circle
 * @param {boolean} [pi=true] Calculate in pi or not || With pi = 23π
 */
function circleArea(radius = 3, pi = true) {
  let pie = pi ? 3.14 : 1;
  let operation = pie * radius ** 2;
  if (pie == 1) {
    return operation + "π";
  } else {
    return operation;
  }
}

module.exports = { circleArea };
