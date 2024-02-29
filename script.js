const form = document.getElementById("credit-card-form");
const cardNumberInput = document.querySelector(".card-number");
const expirationDateInput = document.querySelector(".expiration-date");
const cvvInput = document.querySelector(".cvv");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const cardNumber = cardNumberInput.value;
  const expirationDate = expirationDateInput.value;
  const cvv = cvvInput.value;

  // Validate card number
  if (cardNumber.length < 16) {
    alert("Please enter a valid card number.");
    return;
  } // <- Missing closing bracket here
});
