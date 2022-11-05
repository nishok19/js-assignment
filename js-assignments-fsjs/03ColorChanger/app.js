const btn = document.querySelector("#button");
const canvas = document.querySelector("#canvas");

btn.addEventListener("click", () => {
  let color = "#";
  const range = "0123456789ABCDEF";

  for (let i = 0; i < 6; i++) {
    color = color + range[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  canvas.style.backgroundColor = color;
});
