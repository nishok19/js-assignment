const KEY = "KEY";

const btn = document.querySelector("#jokeBtn");
const jokeEl = document.querySelector("#joke");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": KEY,
    "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
  },
};

const getRandJoke = async () => {
  return await fetch("https://dad-jokes.p.rapidapi.com/random/joke", options)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => console.error(err));
};

btn.addEventListener("click", async () => {
  const response = await getRandJoke();
  console.log("resss", await response);
  jokeEl.innerHTML =
    (await response?.body[0]?.setup) + "<br />" + response?.body[0]?.punchline;
});
