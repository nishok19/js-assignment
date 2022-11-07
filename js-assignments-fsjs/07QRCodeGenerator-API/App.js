const subBtnEl = document.querySelector("#submit");
const imgEl = document.querySelector("#img");
const inputEl = document.querySelector("#input");
const qr = document.querySelector("#qr");

const url = "https://qrcode3.p.rapidapi.com/qrcode/text";
let text = "";
const KEY = "KEY";

subBtnEl.addEventListener("click", async () => {
  //   text = inputEl.value.replace(" ", "").trim();
  console.log("text", text);
  inputEl.value
    ? await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key":
            "308187a1demsh68cf402fb29233dp13095fjsnb026def8bee7",
          "X-RapidAPI-Host": "qrcode3.p.rapidapi.com",
        },
        body: `{"data":"${inputEl.value}","style":{"module":{"color":"black","shape":"default"},"inner_eye":{"shape":"default"},"outer_eye":{"shape":"default"},"background":{}},"size":{"width":200,"quiet_zone":4,"error_correction":"M"},"output":{"filename":"qrcode","format":"png"}}`,
      })
        .then((res) => {
          console.log(res);
          return res.blob();
        })
        .then((res) => {
          console.log(res);

          imgEl.style.display = "block";
          imgEl.src = URL.createObjectURL(res);
          //   qr.innerHTML = `<image src=${URL.createObjectURL(res)} alt="qr" />`;
          inputEl.value = "";
          console.log("first");
        })
        .catch((err) => console.error("error:" + err))
    : null;
});
