const txtbox = document.querySelector("#textbox");
const result = document.querySelector("#result");

const check = () => {
  const txt = txtbox.value;
  let revtxt = "";

  console.log("org", txt.length);
  for (let i = txt.length - 1; i >= 0; i--) {
    revtxt = revtxt + txt[i];
  }
  console.log("final", revtxt);

  txt == revtxt
    ? (result.innerText = "This is a Palindrome")
    : (result.innerText = "This is a not Palindrome");
};
