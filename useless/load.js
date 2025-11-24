/**
 * Create a loading line in your terminal
 * @param {string} message Create a loading line
 * @param {number} n How long the loading will last
 */

function sleep(s) {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
}
async function load(message, n) {
  if (message === "" || typeof n === "string") {
    return "Need a message or n is a string";
  } else if (n <= 0) {
    return "N need to be a number bigger than 0";
  }
  const targetFrames = ["|", "/", "—", "\\"];
  process.stdout.write(`${message}: [ ]`);
  for (let i = 0; i < n; i++) {
    await sleep(0.2);
    process.stdout.write(
      `\r${message}: [${targetFrames[i % targetFrames.length]}]`
    );
  }
}

module.exports = { load };
