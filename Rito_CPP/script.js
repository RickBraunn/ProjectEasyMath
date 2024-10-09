document.addEventListener("DOMContentLoaded", function() {
    // Get the modal element
    var modal = document.getElementById("disclaimer-modal");
    
    // Delay showing the modal by 3 seconds
    setTimeout(function() {
      modal.classList.add("is-active");
      modal.classList.add("fade-in");
    }, 3000); // 3000 milliseconds = 3 seconds
    
    // Add an event listener to the accept button
    document.getElementById("accept-disclaimer").addEventListener("click", function() {
      // Hide the modal when the accept button is clicked
      modal.classList.remove("is-active");
      modal.classList.remove("fade-in");
    });
  });


  const minusSelect = document.getElementById('Minus');
  const yearInput = document.getElementById('Year');
  const monthInput = document.getElementById('Month');
  const dayInput = document.getElementById('Day');
  const myButton = document.getElementById('myButton');

      // Add an event listener to the button
      myButton.addEventListener('click', (e) => {
        // Prevent the default form submission behavior
        e.preventDefault();

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
  let resultado = penaInMonths;

  console.log(resultado);


      });