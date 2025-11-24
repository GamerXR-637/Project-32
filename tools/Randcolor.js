/**
 * Get n number of color
 *
 * @param {number} number How many times to give a color
 * @param {boolean} hash Have the # or not
 */
function Randcolor(number, hash) {
  const color = [];
  let prefix = hash ? "#" : "";
  let value = isNaN(number) ? 1 : number;
  for (let i = 0; i < value; i++) {
    const hex =
      prefix +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    color.push(hex);
  }
  return color.toString();
}

module.exports = { Randcolor };
