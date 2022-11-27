const buttons = document.querySelectorAll("button");
const array = [];
const array1 = [];

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    let value = button.innerText;

    switch (value) {
      case "square":
        if (array.length == 1) {
          array.push("square");
          input.value = "square(" + array[0] + ")";
        } else {
          alert("Please enter a number first");
        }
        break;
      case "sqrt":
        if (array.length == 1) {
          array.push("sqrt");
          input.value = "sqrt(" + array[0] + ")";
        } else {
          alert("Please enter a number first");
        }
        break;
      case "cube":
        if (array.length == 1) {
          array.push("cube");
          input.value = "cube(" + array[0] + ")";
        } else {
          alert("Please enter a number first");
        }
        break;
      case "cbrt":
        if (array.length == 1) {
          array.push("cbrt");
          input.value = "cbrt(" + array[0] + ")";
        } else {
          alert("Please enter a number first");
        }
        break;
      case "+":
        if (array.length == 1) {
          array.push("+");
        } else {
          alert("Please enter a number first");
        }
        updateInput();
        break;
      case "-":
        if (array.length == 1) {
          array.push("-");
        } else {
          alert("Please enter a number first");
        }
        updateInput();
        break;
      case "*":
        if (array.length == 1) {
          array.push("*");
        } else {
          alert("Please enter a number first");
        }
        updateInput();
        break;
      case "/":
        if (array.length == 1) {
          array.push("/");
        } else {
          alert("Please enter a number first");
        }
        updateInput();
        break;
      case "=":
        let operand1 = array[0];
        let operand2 = array[2];
        let operator = array[1];

        if (operator == "+") {
          input.value = parseInt(operand1) + parseInt(operand2);
        }
        if (operator == "-") {
          input.value = parseInt(operand1) - parseInt(operand2);
        }
        if (operator == "*") {
          input.value = parseInt(operand1) * parseInt(operand2);
        }
        if (operator == "/") {
          input.value = parseInt(operand1) / parseInt(operand2);
        }
        if (operator == "square") {
          input.value = parseInt(operand1) * parseInt(operand1);
        }
        if (operator == "sqrt") {
          input.value = Math.pow(parseInt(operand1), 0.5);
        }
        if (operator == "cube") {
          input.value =
            parseInt(operand1) * parseInt(operand1) * parseInt(operand1);
        }
        if (operator == "cbrt") {
          input.value = Math.pow(parseInt(operand1), 1 / 3);
        }
        break;
      case "AC":
        allclear();
        break;

      default:
        if (array.length == 0) {
          array.push(value.toString());
        } else if (array.length == 2) {
          array.push(value.toString());
        }
        updateInput();
        break;
    }
  });
});

function updateInput() {
  input.value = array.join("");
}

function allclear() {
  while (array.lenght > 0) array.pop();
  if ((array.length = 0)) array[0] = 0;
  updateInput();
}
