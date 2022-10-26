let flag = false;
let intervalid;

const start = () => {
  if (!intervalid)
    intervalid = setInterval(() => {
      document.querySelector("#count").innerText =
        parseInt(document.querySelector("#count").innerText) + 1;
    }, 1000);
};

const stop = () => {
  clearInterval(intervalid);
  intervalid = null;
  console.log(intervalid);
};
