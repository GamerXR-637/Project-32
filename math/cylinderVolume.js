/**
 * Find the volume of a cylinder
 *
 * @param {number} [radius=3]  The radius of the circle
 * @param {number} [hight=2] The hight of the cylinder
 * @param {boolean} [pi=true] Calculate in pi or not || With pi = 23π
 */
function cylinderVolume(radius = 3, pi = true, hight = 2) {
  let pie = pi ? 3.14 : 1;
  let operation = pie * radius ** 2 * hight;
  if (pie == 1) {
    return operation + "π";
  } else {
    return operation;
  }
}

module.exports = { cylinderVolume };
