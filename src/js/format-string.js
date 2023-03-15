export function format(string) {
  let reset = string[0];
  for (let i = 1; i < string.length; i++) {
    if (string[i] === "-") {
      reset += "+";
    }
    reset += string[i];
  }
  return reset;
}
