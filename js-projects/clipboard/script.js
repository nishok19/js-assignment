const txtbox = document.querySelector("#textbox");
const result = document.querySelector("#result");

const copy = () => {
  const text = txtbox.value;
  navigator.clipboard.writeText(text).then(() => {
    result.innerText = "Copied to Clipboard!!!";
    txtbox.value = "";
    setTimeout(() => {
      result.innerText = "";
    }, 2000);
  });
};
