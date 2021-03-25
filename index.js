"use strict";
const num1 = +prompt("write first number");
const num2 = +prompt("write second number");
const operator = prompt("What use? \n / * - +");

switch ((num1, num2, operator)) {
  case "+": {
    const coundet = hightPriority(num1, num2, plus);
    console.log("result", coundet);
    break;
  }
  case "-": {
    const coundet = hightPriority(num1, num2, minus);
    console.log("result", coundet);
    break;
  }
  case "*": {
    const coundet = hightPriority(num1, num2, mul);
    console.log("result", coundet);
    break;
  }
  case "/": {
    const coundet = hightPriority(num1, num2, div);
    console.log("result", coundet);
    break;
  }
  default:{
    console.error('WRONG OPERATOR !');
  }
}

function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}
function plus(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}

function hightPriority(valueA, valueB, operation) {
  const result = operation(valueA, valueB);
  console.log(operation);
  return result;
}
