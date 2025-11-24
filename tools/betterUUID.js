/**
 * Generates a UUID-like string with a specified number of segments.
 *
 * @param {number} [number=3] How many parts (e.g., xxxxx-xxxxx-xxxxx). Defaults to 3.
 */

function string() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  //Generate a random length between 5 and 10
  let rand = Math.floor(Math.random() * 6) + 5;
  for (let i = 0; i < rand; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function betterUUID(number = 3) {
  if (number <= 0) {
    return "";
  }
  const segments = [];
  for (let i = 0; i < number; i++) {
    segments.push(string());
  }
  return segments.join("-");
}

module.exports = { betterUUID };
