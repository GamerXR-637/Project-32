const colors = {
  reset: "\x1b[0m",
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
};

/**
 * Console Log in color
 *
 * @param {'red' | 'green' | 'yellow'| 'blue' | 'magenta' | 'cyan'} color The color of the text?
 * @param {string} text Input string
 */
function colorTerminal(text, color) {
  const listcolor = ['red', 'green',  'yellow', 'blue', 'magenta',  'cyan']
    if (!listcolor.includes(fromUnit)) {
    console.log(`${colors[red]}That is not a valid color${colors.reset}`);
  }

  if (text && colors[color]) {
    console.log(`${colors[color]}${text}${colors.reset}`);
  } else if (text) {
    console.log(text);
  }
}

module.exports = { colorTerminal };
