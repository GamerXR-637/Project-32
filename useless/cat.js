/**
 * The string to have the cat to say
 *
 * @param {string} [text] The input string for the cat to say. If empty, a random phrase is used.
 */

function cat(text) {
  let whatToSay;

  if (text) {
    whatToSay = text;
  } else {
    const defaultPhrases = ["meow", "uwu", "meow meow"];
    whatToSay =
      defaultPhrases[Math.floor(Math.random() * defaultPhrases.length)];
  }
  console.log(" /\\_/\\");
  console.log(`( o.o )  ~* ${whatToSay}`);
  console.log(" > ^ <");
}

module.exports = { cat };
