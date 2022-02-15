const plusBtn = document.getElementById("plus-btn");
const minusBtn = document.getElementById("minus-btn");
const phoneQuantity = document.getElementById("phone-quantity");
const phonePrice = document.getElementById("phone-price");
const casePlusBtn = document.getElementById("case-plus-btn");
const caseMinusBtn = document.getElementById("case-minus-btn");
const caseQuantity = document.getElementById("case-quantity");
const casePrice = document.getElementById("case-price");
const subTotal = document.getElementById("sub-total");
const tax = document.getElementById("tax");
const grandTotal = document.getElementById("grand-total");
function calculate(isIncrement, quantity, price, amount) {
  if (isIncrement == true) {
    quantity.value++;
  } else {
    quantity.value--;
  }

  price.innerText = quantity.value * amount;
  subTotal.innerText =
    parseFloat(phonePrice.innerText) + parseFloat(casePrice.innerText);
  tax.innerText = parseFloat(subTotal.innerText) * 0.1;
  grandTotal.innerText =
    parseFloat(subTotal.innerText) + parseFloat(tax.innerText);
}

minusBtn.addEventListener("click", function () {
  if (phoneQuantity.value > 0) {
    calculate(false, phoneQuantity, phonePrice, 1200);
  }
});

caseMinusBtn.addEventListener("click", function () {
  if (caseQuantity.value > 0) {
    calculate(false, caseQuantity, casePrice, 60);
  }
});
