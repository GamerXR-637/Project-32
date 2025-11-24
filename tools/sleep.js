/**
 * Pauses execution for a specified number of seconds.
 *
 * @param {number} [seconds=10] The number of seconds to wait.
 * @returns {Promise<void>} A promise that resolves after the specified time.
 */
function sleep(seconds = 10) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

module.exports = { sleep };
