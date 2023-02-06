const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#sub");
const kopBtn = document.querySelector("#kop");
const bolBtn = document.querySelector("#bol");
const output = document.querySelector("#output");

function getInputValues() {
  const value1 = +num1.value;
  const value2 = parseInt(num2.value);
  return [value1, value2];
}
function addHandler() {
  const values = getInputValues();
  const result = values[0] + values[1];
  output.innerHTML = `Результат =   ${result}`;
}
function subHandler() {
  const values = getInputValues();
  const result = values[0] - values[1];
  output.innerHTML = `Результат =   ${result}`;
}

function kopHandler() {
  const values = getInputValues();
  const result = values[0] * values[1];
  output.innerHTML = `Результат = ${result}`;
}
function bolHandler() {
  const values = getInputValues();
  const result = values[0] / values[1];
  output.innerHTML = `Результат =  ${result}`;
}

addBtn.addEventListener("click", addHandler);
subBtn.addEventListener("click", subHandler);
kopBtn.addEventListener("click", kopHandler);
bolBtn.addEventListener("click", bolHandler);
