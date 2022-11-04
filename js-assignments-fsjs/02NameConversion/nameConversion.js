const textBox = document.querySelector("#text");
const camelCase = document.querySelector("#camel-case");
const pascalCase = document.querySelector("#pascal-case");
const snakeCase = document.querySelector("#snake-case");
const screamSnakeCase = document.querySelector("#screaming-snake-case");
const kebabCase = document.querySelector("#kebab-case");
const screamKebabCase = document.querySelector("#screaming-kebab-case");

const convert = () => {
  const txt = textBox.value;

  let camelText = txt.replace(/[-_\s.]+(.)?/g, (_, c) =>
    c ? c.toUpperCase() : ""
  );
  camelCase.innerText = camelText;

  //
  let pascalText = (txt.match(/[a-zA-Z0-9]+/g) || [])
    .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
    .join("");
  pascalCase.innerText = pascalText;

  //
  let snakeText = txt.replace(/\W+/g, " ").toLowerCase().split(" ").join("_");
  snakeCase.innerText = snakeText;

  //
  let screamSnakeText = txt
    .replace(/\W+/g, " ")
    .toUpperCase()
    .split(" ")
    .join("_");
  screamSnakeCase.innerText = screamSnakeText;

  //
  let kebabText = txt.replace(/\W+/g, " ").toLowerCase().split(" ").join("-");
  kebabCase.innerText = kebabText;

  //
  let screamKebabText = txt
    .replace(/\W+/g, " ")
    .toUpperCase()
    .split(" ")
    .join("-");
  screamKebabCase.innerText = screamKebabText;
};
