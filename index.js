const path = require("path");
const currentDirectory = path.dirname(__filename);
const cpath = path.dirname(currentDirectory);

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
