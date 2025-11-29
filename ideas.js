const readline = require("readline");
const crypto = require("crypto");

function encodeText(text, key) {
  let encoded = "";
  for (let i = 0; i < text.length; i++) {
    // XOR each character code with the key's character code (cycling through the key)
    let charCode = text.charCodeAt(i) ^ key.charCodeAt(i % key.length);
    encoded += String.fromCharCode(charCode);
  }
  // Convert to base64 for safe transport
  return btoa(encoded);
}

function decodeText(encodedText, key) {
  let decodedBase64 = atob(encodedText);
  let decoded = "";
  for (let i = 0; i < decodedBase64.length; i++) {
    let charCode = decodedBase64.charCodeAt(i) ^ key.charCodeAt(i % key.length);
    decoded += String.fromCharCode(charCode);
  }
  return decoded;
}

function shambel(text, pass) {
  if (text == "" || pass == "") {
    return { output: "Need to input a text and a pass" };
  } else {
    let e = stringToBase16(text);
    return { output: `${encodeText(e, pass)}` };
  }
}

function stringToBase16(str) {
  let hexString = "";
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    let hex = charCode.toString(10);
    if (hex.length === 1) {
      hex = "0" + hex;
    }
    hexString += hex;
  }
  return hexString;
}

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

let data = {
  name: "",
  shards: "",
};

rl.question("What is you username? ", (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thanks`);

  rl.question("Password? ", (pass) => {
    // TODO: Log the answer in a database
    console.log(`Thanks`);

    rl.close();
    console.log(stringToBase16(answer));
    console.log(shambel(answer, pass));
  });
});
