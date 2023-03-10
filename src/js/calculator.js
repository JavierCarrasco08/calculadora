export class Calculator {
  constructor(calculator) {
    this.calculator = calculator;
    this.NUM_CALCULATOR = calculator.firstElementChild.firstElementChild;
    this.REG_EXP = /[+,-]/dgi;
  }
  del() {
    this.NUM_CALCULATOR.textContent = this.NUM_CALCULATOR.textContent.substring(
      0,
      this.NUM_CALCULATOR.textContent.length - 1
    );
  }
  delete() {
    this.NUM_CALCULATOR.textContent = "";
  }
  writing(target) {
    if (
      (this.NUM_CALCULATOR.textContent.length === 0 &&
        target.matches(".calculator__decimal")) ||
      (this.NUM_CALCULATOR.textContent.length === 0 &&
        target.matches(".calculator__op"))
    ) {
      this.NUM_CALCULATOR.textContent += "0";
    }
    if (this.NUM_CALCULATOR.textContent.length) {
      if (this.NUM_CALCULATOR.textContent.length > 1) {
        if (
          this.NUM_CALCULATOR.textContent.at(-2).match(/[x,÷]/) &&
          this.NUM_CALCULATOR.textContent.at(-1) === "-" &&
          target.textContent.match(/[+,÷,x]/)
        ) {
          return false;
        }
      }
      if (
        this.NUM_CALCULATOR.textContent.at(-1).match(/[+,-]/) &&
        target.textContent.match(/[+,÷,-]/)
      ) {
        this.del();
        this.NUM_CALCULATOR.textContent += target.textContent;
        return false;
      }
      if (
        this.NUM_CALCULATOR.textContent.at(-1).match(/[x,÷]/) &&
        target.textContent.match(/[x,÷]/)
      ) {
        this.del();
        this.NUM_CALCULATOR.textContent += target.textContent;
        return false;
      }
      if (
        this.NUM_CALCULATOR.textContent.at(-1).match(/[x,+]/) &&
        target.textContent.match(/[x,+]/)
      ) {
        this.del();
        this.NUM_CALCULATOR.textContent += target.textContent;
        return false;
      }
      if (
        this.NUM_CALCULATOR.textContent.at(-1).match(/[+,÷]/) &&
        target.textContent.match(/[+,÷]/)
      ) {
        this.del();
        this.NUM_CALCULATOR.textContent += target.textContent;
        return false;
      }
    }
    this.NUM_CALCULATOR.textContent += target.textContent;
  }
  calculate() {
    const HIERARCHY = ["x", "÷", "-", "+"];
    let conjuntoNumero = this.NUM_CALCULATOR.textContent.split(/([+,x,÷,-])/);
    HIERARCHY.forEach((e) => {
      for (let i = 0; i <= conjuntoNumero.length; i++) {
        if (e === conjuntoNumero[i] && conjuntoNumero[i] === "+") {
          let num1 = +conjuntoNumero.at(i - 1),
            num2 = +conjuntoNumero.at(i + 1);
          conjuntoNumero.splice(i - 1, 3, num1 + num2);
          i -= 1;
        }
        if (e === conjuntoNumero[i] && conjuntoNumero[i] === "x") {
          let num1 = +conjuntoNumero[i - 1],
            num2 = +conjuntoNumero[i + 1];
          conjuntoNumero.splice(i - 1, 3, num1 * num2);
          i -= 1;
        }
        if (e === conjuntoNumero[i] && conjuntoNumero[i] === "-") {
          let num1 = +conjuntoNumero[i - 1],
            num2 = +conjuntoNumero[i + 1];
          conjuntoNumero.splice(i - 1, 3, num1 - num2);
          i -= 1;
        }
        if (e === conjuntoNumero[i] && conjuntoNumero[i] === "÷") {
          let num1 = +conjuntoNumero[i - 1],
            num2 = +conjuntoNumero[i + 1];
          conjuntoNumero.splice(i - 1, 3, num1 / num2);
          i -= 1;
        }
      }
    });
    this.NUM_CALCULATOR.textContent = conjuntoNumero.join("");
  }
}
