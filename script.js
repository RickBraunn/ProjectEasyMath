document.addEventListener('DOMContentLoaded', () => {
    // Get the form elements
    const minusSelect = document.getElementById('Minus');
    const yearInput = document.getElementById('Year');
    const monthInput = document.getElementById('Month');
    const dayInput = document.getElementById('Day');
    const myButton = document.getElementById('myButton');
  


    // Add an event listener to the button
    //myButton.addEventListener('click', (e) => {

   // });

   document.getElementById('calculo').onsubmit = function(e){
  // Prevent the default form submission behavior
  e.preventDefault();
  
 

  // Get the selected value from the select element
  const minusValue = minusSelect.value;

  // Check if minusValue is null or zero
  if (!minusValue || minusValue === '0') {
    alert('Selecione uma opção válida para a redução!');
    return; // Exit the function early
  }

  // Get the input values from the year, month, and day input elements
  let yearValue = parseInt(yearInput.value);
  let monthValue = parseInt(monthInput.value) || 0; // Set to 0 if empty
  let dayValue = parseInt(dayInput.value) || 0; // Set to 0 if empty

  // Convert the day value to months (assuming 30 days per month)
  const dayInMonths = dayValue / 30;

  // Add the year, month, and day values to get the total months
  const penaInMonths = yearValue * 12 + monthValue + dayInMonths;

  if (!penaInMonths || penaInMonths <= '0') {
    alert('Selecione uma opção válida para a Pena!');
    return; // Exit the function early
  }

  // Store the values in variables
  let resultado;
  let parcela;

  // Convert the minus value to a reduction percentage
  if (minusValue === '1') {
    resultado = penaInMonths / 3;
    resultado = resultado * 2;
    resultado = resultado *30;
    parcela = "1/3";

  } else if (minusValue === '2') {
    resultado = penaInMonths / 3;
    resultado = resultado *30;
    parcela = "2/3";

  }

  // Display the variables in an alert box
 
// Display the result in the result div
const resultDiv = document.getElementById('result');
if (resultado > 0) {
    resultDiv.innerHTML = `Considerando a redução de ${parcela}, o total de horas de serviço comunitário é de: ${resultado} horas`;
} else {
    resultDiv.innerHTML = 'Por favor, selecione uma opção válida para a pena.';
}}});