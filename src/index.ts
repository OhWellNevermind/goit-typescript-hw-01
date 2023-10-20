import { add } from "./test";

const button = document.querySelector("button")!;
const input = document.querySelector("input")!;
const output = document.querySelector("p");

if (button && input) {
  button.addEventListener("click", () => {
    if (output !== null) {
      output.innerText = add(+input.value, 1).toString();
    }
  });
}
