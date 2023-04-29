// Select elements
const billInput = document.querySelector('.input-bill');
const firstErrorMessage = document.querySelector('.top-error');
const secondErrorMessage = document.querySelector('.second-error');
const peopleInput = document.querySelector(".input-people");
const percent = document.querySelectorAll(".percent");
const customPercentInput = document.querySelector('.input-percent');
const percentButtons = document.querySelectorAll('.percent');
const tipAmountResult = document.querySelector('.result-amount');
const totalAmountResult = document.querySelector('.result-total');

// Error messages
billInput.addEventListener('input', function() {
  if (billInput.value == 0) {
    firstErrorMessage.style.display = 'block';
  } else {
    firstErrorMessage.style.display = 'none';
  }
});
peopleInput.addEventListener('input', function() {
  if (peopleInput.value == 0) {
    secondErrorMessage.style.display = 'block';
  } else {
    secondErrorMessage.style.display = 'none';
  }
});

// Add click event listener to each percent button
percentButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the selected percent value
    const selectedPercent = parseInt(button.innerText);

    // Get the custom percent value
    const customPercent = parseInt(customPercentInput.value) || 0;

    // Calculate the tip amount
    const tipAmount = (billInput.value * (selectedPercent + customPercent) / 100) / peopleInput.value;

    // Calculate the total amount
    const totalAmount = (billInput.value / peopleInput.value) + tipAmount;

    // Display the results
    tipAmountResult.innerText = `$${tipAmount.toFixed(2)}`;
    totalAmountResult.innerText = `$${totalAmount.toFixed(2)}`;
  });
});


// Add a click event listener to the custom percent input
customPercentInput.addEventListener('click', () => {
  // Get the custom percent value
  const customPercent = parseInt(customPercentInput.value) || 0;

  // Calculate the tip amount
  const tipAmount = (billInput.value * (customPercent) / 100) / peopleInput.value;

  // Calculate the total amount
  const totalAmount = (billInput.value / peopleInput.value) + tipAmount;

  // Display the results
  tipAmountResult.innerText = `$${tipAmount.toFixed(2)}`;
  totalAmountResult.innerText = `$${totalAmount.toFixed(2)}`;
});


// Select elements
const inputBill = document.querySelector('.input-bill');
const inputPercent = document.querySelector('.input-percent');
const resultAmount = document.querySelector('.result-amount');
const resultTotal = document.querySelector('.result-total');
const resetButton = document.querySelector('.reset');

// Set initial values
inputBill.value = 0;
inputPercent.value = 'Custom';
resultAmount.innerHTML = '$0.00';
resultTotal.innerHTML = '$0.00';

// Add event listener to reset button
resetButton.addEventListener('click', () => {
  // Reset values
  inputBill.value = '';
  peopleInput.value = '';
  inputPercent.value = 'Custom';
  resultAmount.innerHTML = '$0.00';
  resultTotal.innerHTML = '$0.00';
});




