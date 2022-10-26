const calc = (operator) => {
  let num1 = parseFloat(document.querySelector("#num1").value);
  let num2 = parseFloat(document.querySelector("#num2").value);
  if (operator == "add")
    document.querySelector("#result").innerText = num1 + num2;
  else if (operator == "subtract")
    document.querySelector("#result").innerText = num1 - num2;
  else if (operator == "multiply")
    document.querySelector("#result").innerText = num1 * num2;
  else if (operator == "divide")
    document.querySelector("#result").innerText = num1 / num2;
  else if (operator == "clear") document.querySelector("#result").innerText = 0;

  //
  //   document.querySelector("#num1").value = 0;

  //   document.querySelector("#num2").value = 0;
};
