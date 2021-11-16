import { InputNumber } from "https://code4fukui.github.io/input-number/input-number.js";

class InputPostalCode extends InputNumber {
  constructor(opts) {
    super(opts);
    this.setAttribute("maxlength", 7);
    this.inp.addEventListener("focusout", () => {
      if (this.value?.length != 7) {
        this.value = "";
        if (this.onchange) {
          this.onchange();
        }
      }
    });
  }
}

customElements.define("input-postalcode", InputPostalCode);

export { InputPostalCode };
