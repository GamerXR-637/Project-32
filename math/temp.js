/**
 * Calculate temperate in C, F or K
 * @param {number} n The base Temp to convert
 * @param {'c' | 'f' | 'k'} from The original unit
 * @param {'c' | 'f' | 'k'} to The unit to convert to
 * @returns
 * @example
 * temp(100,"c","f") => 212 degrees F
 */

function temp(n, from, to) {
  if (typeof n !== "number") {
    return "[Error]: Invalid input 'n' must be a number.";
  }

  const fromUnit = from.toLowerCase();
  const toUnit = to.toLowerCase();
  const validUnits = ["c", "f", "k"];

  if (fromUnit === toUnit) {
    return n;
  }

  if (!validUnits.includes(fromUnit) || !validUnits.includes(toUnit)) {
    return "[Error]: Invalid temperature units. Only 'c', 'f', and 'k' are supported.";
  }

  if (fromUnit === "f" && toUnit === "c") {
    return (n - 32) * (5 / 9);
  } else if (fromUnit === "c" && toUnit === "f") {
    return n * 1.8 + 32;
  } else if (fromUnit === "c" && toUnit === "k") {
    return n + 273.15;
  } else if (fromUnit === "k" && toUnit === "c") {
    return n - 273.15;
  } else if (fromUnit === "f" && toUnit === "k") {
    return (n - 32) * (5 / 9) + 273.15;
  } else if (fromUnit === "k" && toUnit === "f") {
    return (n - 273.15) * 1.8 + 32;
  } else {
    return "[Error]: Invalid temperature units provided.";
  }
}

module.exports = { temp };
