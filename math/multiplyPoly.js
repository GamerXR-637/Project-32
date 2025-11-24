/**
 * Calculates when two polynomials are multiplied together.
 * @param {number[]} PolynomialOne The coefficients of the first polynomial
 * @param {number[]} PolynomialTwo The coefficients of the second polynomial
 * @returns {number[]} The coefficients of the resulting polynomial after multiplication.
 */

function multiplyPoly(PolynomialOne, PolynomialTwo) {
  if (
    !polynomialOne ||
    !polynomialOne.trim() ||
    !polynomialTwo ||
    !polynomialTwo.trim()
  ) {
    return "Error: Please provide two valid polynomials to calculate.";
  }

  let result = new Array(PolynomialOne.length + PolynomialTwo.length - 1).fill(
    0
  );
  for (let index1 = 0; index1 < PolynomialOne.length; index1++) {
    for (let index2 = 0; index2 < PolynomialTwo.length; index2++) {
      result[index1 + index2] += PolynomialOne[index1] * PolynomialTwo[index2];
    }
  }
  return result;
}

module.exports = { multiplyPoly };
