const readline = require("readline");
const crypto = require('crypto');

// function shambel() {

// }

function stringToBase16(str) {
  let hexString = '';
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    let hex = charCode.toString(10);
    if (hex.length === 1) {
      hex = '0' + hex;
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
    shards: ""
}


rl.question('What is you username? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thanks`);

  rl.question('Password? ', (pass) => {
  // TODO: Log the answer in a database
  console.log(`Thanks`);

  rl.close();
    console.log(stringToBase16(answer))
});
});