/**
 * Find the hypotenuse of the triangle
 *
 * @param {number} [legOne=3]  The length of one of the triangle leg
 * @param {number} [legTwo=4] The length of one of the triangle leg
 */
function triangle(legOne = 3, legTwo = 4) {
  let h = legOne ** 2 + legTwo ** 2;
  return Math.sqrt(h);
}

module.exports = { triangle };
