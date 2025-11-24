/**
 * Converts a single color component to its two-digit hex representation.
 * @param {number} c A color component (0-255).
 * @returns {string} The hex representation.
 */
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

/**
 * Converts RGB color values to a hex color string.
 * @param {number} r The red color value (0-255).
 * @param {number} g The green color value (0-255).
 * @param {number} b The blue color value (0-255).
 * @returns {string} The hex color string (e.g., "#172238").
 */
function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

module.exports = {
  rgbToHex,
};
