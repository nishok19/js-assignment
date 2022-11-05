const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const alpha = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const symbol = "!@#$%^&*";

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

clipboardEl.addEventListener("click", () => {});

generateEl.addEventListener("click", () => {
  let pwd = generatePassword(lengthEl.value);
  console.log("passssss... ", pwd);
});

function generatePassword(length) {
  let pwd = "";
  let keys = Object.keys(randomFunc);

  if (!uppercaseEl.checked) {
    keys = keys.filter((k) => k != "upper");
  }
  if (!lowercaseEl.checked) {
    keys = keys.filter((k) => k != "lower");
  }
  if (!numbersEl.checked) {
    keys = keys.filter((k) => k != "number");
  }
  if (!symbolsEl.checked) {
    keys = keys.filter((k) => k != "symbol");
  }

  console.log("keys ", keys);

  for (let i = 0; i < length; i++) {
    let passFunc =
      keys.length != 0
        ? randomFunc[keys[(keys.length * Math.random()) << 0]]
        : null;
    pwd = pwd + passFunc();
  }
  return pwd;
}

function getRandomLower() {
  return alpha[Math.floor(Math.random() * alpha.length)].toLowerCase();
}

function getRandomUpper() {
  return alpha[Math.floor(Math.random() * alpha.length)].toUpperCase();
}

function getRandomNumber() {
  return num[Math.floor(Math.random() * num.length)];
}

function getRandomSymbol() {
  return symbol[Math.floor(Math.random() * symbol.length)];
}
