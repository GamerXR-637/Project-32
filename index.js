const path = require("path");
const {
  string,
  sleep,
  toFile,
  load,
  generate,
  folder,
  randomPath,
  randomSeed,
  seededRandom,
  generateCorruptedData,
  betterUUID,
} = require("./functions/fun.js");
const readline = require("readline");
const fsp = require("fs/promises");

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

let gameSettings = {
  limit: Math.floor(5 + Math.random() * 10 * 2),
  directory: path.dirname(__filename),
  path: path.dirname(__dirname),
  randomstate: Math.random(),
  loadingMessage: [
    "Initializing system",
    "Spinning the hard drive",
    "Loading modules",
    "Starting services",
    "Applying configurations",
    "Finalizing setup",
    "Spinning the strings of time",
    "Eating pi",
    "Deleting temp files",
  ],
  decor: [
    "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=",
    ">-<!>-<!>-<!>-<!>-<!>-<!>-<!>-<!>-<!>-<!>-<!>-<",
    "[01010] [10101] [01010] [10101] [01010] [10101]",
    "~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~",
    "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",
    "<<<<>>>> <<<<>>>> <<<<>>>> <<<<>>>> <<<<>>>>",
    "|||||||||||||||||||||||||||||||||||||||||||||",
  ],
  createdfile: 0,
  deletefile: 0,
  mainDirectory: path.join(
    path.dirname(__dirname),
    betterUUID(2) + "mainfile.txt"
  ),
  goodbye: [
    "Hhaha just kidding!!!",
    "You think I would really reset your system?",
    "You know have to find the key :3",
    "Just kidding again, there is no key!",
    "Goodbye!",
    "What are you still doing here?",
    "Go away!",
    "Seriously, go away!",
    "Fine, one last message...",
    "This is the end, my only friend, the end...",
    "No really find a key or something...",
    "...in a file somewhere...",
  ],
};

async function main() {
  console.log(gameSettings.path);
  console.log(
    gameSettings.decor[Math.floor(Math.random() * gameSettings.decor.length)]
  );
  await generate(Math.floor(4 + Math.random() * 20));
  console.log("");
  await sleep(2);
  console.clear();
  await load("Setting up system reset", gameSettings.limit * 5);
  await sleep(2);
  console.clear();
  for (let i = 1; i < gameSettings.limit; i++) {
    let m = Math.random() < 0.5 ? toFile(string()) : folder();
    gameSettings.randomstate = Math.random();
    if (gameSettings.randomstate < 0.5) {
      gameSettings.deletefile += 1;
    } else {
      gameSettings.createdfile += 1;
    }

    let action =
      gameSettings.randomstate < 0.5
        ? `${colors.fg.red}Deleting${colors.reset}`
        : `${colors.fg.green}Creating${colors.reset}`;
    const fullPath = path.join(randomPath(gameSettings.path), m);
    console.log(`${action} item: ${fullPath}`);
    let r = Math.floor(Math.random() * 2);
    await sleep(r);
  }
  console.log(
    `${colors.fg.red}${gameSettings.deletefile}${colors.reset} items were deleted and ${colors.fg.green}${gameSettings.createdfile}${colors.reset} were created`
  );
  await sleep(2);
  console.clear();
  await sleep(1);
  await load(
    gameSettings.loadingMessage[
      Math.floor(Math.random() * gameSettings.loadingMessage.length)
    ],
    gameSettings.limit * 3
  );

  const answer = await new Promise((resolve) => {
    rl.question("Please enter a username: ", resolve);
  });

  const data = {
    username: answer,
  };
  let system = path.join(__dirname, "system");

  await fsp.appendFile(
    system + betterUUID() + ".json",
    JSON.stringify(data) + "\n"
  );

  console.log(`Username set to: ${answer}`);
  await sleep(Math.floor(1 + Math.random() * 3));
  await load("Finalizing setup", gameSettings.limit * 2);
  await sleep(1);
  console.clear();
  console.log(`${colors.fg.red}Error:${colors.reset} System reset failed!`);
  console.log(`Creating a file at ${gameSettings.mainDirectory}`);
  await fsp.appendFile(
    gameSettings.mainDirectory,
    generateCorruptedData(1024 * gameSettings.limit)
  );

  for (let i = 5; i > 0; i--) {
    console.log(`System will shutdown in ${i} seconds...`);
    await sleep(1);
  }
  console.log("System shutdown.");
  await sleep(3);

  console.clear();
  for (let i = 0; i < gameSettings.goodbye.length; i++) {
    console.log(gameSettings.goodbye[i]);
    await sleep(Math.floor(1 + Math.random() * 3));
  }
}

main()
  .catch(console.error)
  .finally(() => {
    rl.close();
  });
