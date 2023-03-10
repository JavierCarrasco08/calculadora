export function calculadora() {
  const HIERARCHY = ["x", "/", "-", "+"];
  let conjuntoNumero = "2+-3".split(/([+,x,/,-])/);
  HIERARCHY.forEach((e) => {
    for (let i = 0; i < conjuntoNumero.length; i++) {
      if (e === conjuntoNumero[i] && conjuntoNumero[i] === "+") {
        let num1 = +conjuntoNumero[i - 1],
          num2 = +conjuntoNumero[i + 1];
        console.log(num1, num2);
        // conjuntoNumero.splice(i - 1, 3, num1 + num2);
      }
      if (e === conjuntoNumero[i] && conjuntoNumero[i] === "x") {
        let num1 = +conjuntoNumero[i - 1],
          num2 = +conjuntoNumero[i + 1];
        // conjuntoNumero.splice(i - 1, 3, num1 * num2);
      }
      if (e === conjuntoNumero[i] && conjuntoNumero[i] === "-") {
        let num1 = +conjuntoNumero[i - 1],
          num2 = +conjuntoNumero[i + 1];
        // conjuntoNumero.splice(i - 1, 3, num1 - num2);
      }
      if (e === conjuntoNumero[i] && conjuntoNumero[i] === "/") {
        let num1 = +conjuntoNumero[i - 1],
          num2 = +conjuntoNumero[i + 1];
        // conjuntoNumero.splice(i - 1, 3, num1 / num2);
      }
    }
  });
  return conjuntoNumero;
}
