console.log("sucessfull!");

var switchCheckbox = document.getElementById('switch');
var headerElement = document.querySelector('header');
var elements = document.querySelector('.elements');


// Add an event listener to detect changes in the checkbox state
switchCheckbox.addEventListener('change', function() {
  // Check if the checkbox is checked
  if (switchCheckbox.checked) {
    headerElement.classList.remove('light-mode');
    headerElement.classList.add('dark-mode');
    // elements.classList.add('elements-checked');
  } else{
    headerElement.classList.remove('dark-mode');
    headerElement.classList.add('light-mode');
    // elements.classList.remove('elements-checked');
  }
});

