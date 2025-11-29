// const readline = require("readline");
// const crypto = require('crypto');

// function encodeText(text, key) {
//   let encoded = "";
//   for (let i = 0; i < text.length; i++) {
//     // XOR each character code with the key's character code (cycling through the key)
//     let charCode = text.charCodeAt(i) ^ key.charCodeAt(i % key.length);
//     encoded += String.fromCharCode(charCode);
//   }
//   // Convert to base64 for safe transport
//   return btoa(encoded);
// }

// function decodeText(encodedText, key) {
//   let decodedBase64 = atob(encodedText);
//   let decoded = "";
//   for (let i = 0; i < decodedBase64.length; i++) {
//     let charCode = decodedBase64.charCodeAt(i) ^ key.charCodeAt(i % key.length);
//     decoded += String.fromCharCode(charCode);
//   }
//   return decoded;
// }

// function shambel(text, pass) {
//   if (text == "" || pass == "") {
//     return {output: "Need to input a text and a pass"}
//   } else {
//     let e = stringToBase16(text)
//     return {output: `${encodeText(e,pass)}`}
//   }
// }

// function stringToBase16(str) {
//   let hexString = '';
//   for (let i = 0; i < str.length; i++) {
//     const charCode = str.charCodeAt(i);
//     let hex = charCode.toString(10);
//     if (hex.length === 1) {
//       hex = '0' + hex;
//     }
//     hexString += hex;
//   }
//   return hexString;
// }

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

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

// let data = {
//     name: "",
//     shards: ""
// }

// rl.question('What is you username? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thanks`);

//   rl.question('Password? ', (pass) => {
//   // TODO: Log the answer in a database
//   console.log(`Thanks`);

//   rl.close();
//     console.log(stringToBase16(answer))
//     console.log(shambel(answer,pass))
//   });
// });

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

function folder() {
  let list = ["System32", "Desktop", "Picture", "Secret"];
  let s = list[Math.floor(Math.random() * list.length)];
  return s;
}

(async () => {
  const limit = Math.floor(5 + Math.random() * 10 * 2);
  await load("Setting up system reset", 10);
  console.log("");
  for (let i = 1; i < limit; i++) {
    let m = Math.random() < 0.5 ? toFile(string()) : folder();
    console.log("Deleting file " + m);
    let r = Math.floor(Math.random() * 2);
    await sleep(r);
  }
})();
