let display = document.getElementById("result");
function appendToDisplay(value) {
  display.value = display.value + value;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (err) {
    alert("Invalid");
  }
}

function Clear() {
  display.value = "";
}
function Delete() {
  display.value = display.value.slice(0, -1);
}
