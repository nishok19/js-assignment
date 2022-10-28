const txtbox = document.querySelector("#textbox");
const counter = document.querySelector("#count");

const count = () => {
  const txt = txtbox.value;
  console.log(txt);
  const txtarr = txt.split(" ");
  counter.innerText = txtarr.length;
};
