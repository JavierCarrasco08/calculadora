import { Calculator } from "./calculator.js";
import { calculadora } from "./example.js";
const $BODY_CALCULATOR = document.querySelector(".calculator__body");
const $CALCULATOR = new Calculator(document.querySelector(".calculator"));
$BODY_CALCULATOR.addEventListener("pointerdown", (e) => {
  let target = e.target;
  if (
    target.matches(".calculator__number") ||
    target.matches(".calculator__op") ||
    target.matches(".calculator__decimal") ||
    target.matches(".calculator__op--menos")
  ) {
    $CALCULATOR.writing(e.target);
  }
  if (target.matches(".calculator__del")) {
    $CALCULATOR.del();
  }
  if (target.matches(".calculator__delete")) {
    $CALCULATOR.delete();
  }
  if (target.matches(".calculator__op--igual")) {
    $CALCULATOR.calculate();
  }
});
console.log(calculadora("5x-5"));
