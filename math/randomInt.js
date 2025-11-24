/**
 * Generates a random Integer from 1 to y
 *
 * @param {number} [number=10] The max of the random Integer || Defaults is 10.
 */

function randomInt(number = 10) {
  let int = Math.floor(Math.random() * number);
  return int;
}

module.exports = { randomInt };
