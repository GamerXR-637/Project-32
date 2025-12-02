const path = require("path");
const currentDirectory = path.dirname(__filename);
const cpath = path.dirname(currentDirectory);
const { string, sleep, toFile, load, generate, folder, randomPath, randomSeed, seededRandom } = require("./functions/fun.js");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const colors = {
  reset: "\x1b[0m",
  fg: {
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    cyan: "\x1b[36m",
  },
};

(async () => {
  const limit = Math.floor(5 + Math.random() * 10 * 2);
  console.log(cpath);
  await generate(Math.floor(4 + Math.random() * 20))
  console.log("");
  await sleep(2)
  console.clear();
  await load("Setting up system reset", limit * 5);
  await sleep(2)
  console.clear();
  let c = 0;
  let d = 0;
  for (let i = 1; i < limit; i++) {
    let m = Math.random() < 0.5 ? toFile(string()) : folder();
    let rand = Math.random();
    if (rand < 0.5) {
      d += 1;
    } else {
      c += 1;
    }

    let action =
      rand < 0.5
        ? `${colors.fg.red}Deleting${colors.reset}`
        : `${colors.fg.green}Creating${colors.reset}`;
    const fullPath = path.join(randomPath(cpath), m);
    console.log(`${action} item: ${fullPath}`);
    let r = Math.floor(Math.random() * 2);
    await sleep(r);
  }
  console.log(
    `${colors.fg.red}${d}${colors.reset} items were deleted and ${colors.fg.green}${c}${colors.reset} were created`
  );
  await sleep(2)
  console.clear();
})();

rl.question("Please enter a username", (answer) => {
  console.log(`Username set to: ${answer}`);



});
