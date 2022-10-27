const input = document.querySelector("#num");
let intervalid;
const start = () => {
  if (!parseInt(input.value) == 0) {
    intervalid = setInterval(countDown, 1000);
    console.log(intervalid);
  } else {
    clearInterval(intervalid);
    intervalid = null;
  }
};

const countDown = () => {
  input.value = parseInt(input.value) - 1;
  console.log(input.value);
  if (parseInt(input.value) == 0) {
    clearInterval(intervalid);
    intervalid = null;
  }
};
