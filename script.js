const resValue = document.getElementById('calc-res');
function updateNum (value) {
  resValue.value += value;
}
function calculate() {
  let value = eval(resValue.value);
  resValue.value = value;
}