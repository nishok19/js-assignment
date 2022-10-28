let selcolor = "";
const result = document.querySelector("#result");
const randomColorBox = document.querySelector("#randomColor");

document.querySelector("#red").addEventListener("click", (e) => {
  console.log("the color clicked is ", e);
  randcolor("red");
});

document.querySelector("#green").addEventListener("click", (e) => {
  console.log("the color clicked is ", e);
  randcolor("green");
});

document.querySelector("#blue").addEventListener("click", (e) => {
  console.log("the color clicked is ", e);
  randcolor("blue");
});

const randcolor = (color) => {
  const colorarr = ["red", "green", "blue"];
  const randcolor = colorarr[Math.floor(Math.random() * colorarr.length)];
  randomColorBox.style.background = randcolor;

  randcolor == color
    ? (result.innerText = "You Won!!!")
    : (result.innerText = "You Lost...");
};
