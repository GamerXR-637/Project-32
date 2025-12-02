const path = require("path");


function string() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  let rand = Math.floor(Math.random() * 6) + 5;
  for (let i = 0; i < rand; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function sleep(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

function toFile(input) {
  let suffix = [
    ".txt",
    ".png",
    ".exe",
    ".jpg",
    ".js",
    ".py",
    ".ts",
    ".lua",
    ".html",
    ".md",
  ];
  let s = suffix[Math.floor(Math.random() * suffix.length)];
  return input + s;
}

async function load(message, n) {
  if (typeof message !== "string" || message.length === 0 || typeof n !== "number" || Number.isNaN(n)) {
    return "Need a non-empty message and a numeric n";
  } else if (n <= 0) {
    return "N need to be a number bigger than 0";
  }
  const targetFrames = ["|", "/", "—", "\\"];
  // const targetFrames = ["▒▒▒▒▒▒▒▒▒▒","█▒▒▒▒▒▒▒▒▒","██▒▒▒▒▒▒▒▒","███▒▒▒▒▒▒▒","████▒▒▒▒▒▒", "█████▒▒▒▒▒", "██████▒▒▒▒", "███████▒▒▒", "████████▒▒", "█████████▒", "██████████"];
  
  process.stdout.write(`${message}: [ ]`);
  for (let i = 0; i < n; i++) {
    await sleep(0.2);
    process.stdout.write(
      `\r${message}: [${targetFrames[i % targetFrames.length]}]`
    );
  }
}

async function generate(n) {
  for (let i = 0; i < n; i++) {
    let messages = [
      `Reading ${string()}`,
      `Editing ${string()}`,
      `Starting ${string()}`,
      `Adding ${string()} to system`,
      `Installing ${string()} package`,
      `Error at ${string()}`,
    ];

    let message = messages[Math.floor(Math.random() * messages.length)];
    await sleep(Math.floor(Math.random() * 3));
    console.log(`${message}`);
  }
}

function folder() {
  let list = ["System32", "Desktop", "Picture", "Secret"];
  let s = list[Math.floor(Math.random() * list.length)];
  return s;
}

function randomPath(basePath) {
  let newPath = basePath;
  const depth = Math.floor(Math.random() * 3) + 1; // How many subfolders, 1 to 3

  for (let i = 0; i < depth; i++) {
    let segment = string();
    newPath = path.join(newPath, segment);
  }
  return newPath;
}

function RandSeed(seed = 37) {
  let currentSeed = seed % 2147483647;
  if (currentSeed <= 0) {
    currentSeed += 2147483646;
  }
  currentSeed = (currentSeed * 16807) % 2147483647;
  return ((currentSeed + 1) / 214748346 ) * Math.random() ** 0.526337;
}

function seededRandom(seed = 37) {
  let currentSeed = seed % 2147483647;
  if (currentSeed <= 0) {
    currentSeed += 2147483646;
  }
  currentSeed = (currentSeed * 16807) % 2147483647;
  return ((currentSeed - 1) / 2147483646 ) * 0.9033231978498835;
}

module.exports = {
  string,
  sleep,
  toFile,
  load,
  generate,
  folder,
  randomPath,
  randomSeed: RandSeed,
  seededRandom
};