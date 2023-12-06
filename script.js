console.log("successful!");



let switchCheckbox = document.getElementById('switch');


// dark mode light mode function is here.--
function darkLightMode() {
  const isSwitchChecked = !switchCheckbox.checked; // Change to !switchCheckbox.checked for dark mode by default
  const isDarkMode = isSwitchChecked; // when checked dark mode enable .


  headerContent(isDarkMode); // for the header bg and text change with toggling 
  imageToggle(isDarkMode); // banner image toggle change 
  mainContent(isDarkMode); // this is for the bg of banner --
  squareButton(isDarkMode); // this is for the butttons that addopt dark and light
  Cardsbg(isDarkMode); // this is for the cards bg--
}


// banner image is change with toggling.
function imageToggle(isDarkMode) {
  // access cover images light and dark --
  let darkImg = document.getElementById('dark-img');
  let lightImg = document.getElementById('light-img');

  darkImg.style.display = isDarkMode ? 'block' : 'none'; // a coding bg image for the dark mode
  lightImg.style.display = isDarkMode ? 'none' : 'block';  // complement img for light
}
// header bg and text is change with toggling.

function headerContent(isDarkMode) {
  // access the elements--- 
  const headerBgElement = document.querySelector('.heading-content');
  const logo = document.querySelector('.logo');
  const textAnime = document.getElementById('text-anime');
  const navlinks = Array.from(document.getElementsByClassName('nav-links-tag'));

  navlinks.forEach(link => link.style.color = isDarkMode ? 'white' : 'black');

  headerBgElement.style.backgroundColor = isDarkMode ? 'var(--header-bg)' : 'var(--White)';
  logo.style.color = isDarkMode ? 'var(--header-btn-light)' : 'var(--header-btn-dark)';
  // text-animation cursor border --
  textAnime.style.borderRight = isDarkMode ? '2px solid #ffffff' : '2px solid #000000';
}
function mainContent(isDarkMode) {
  const banner = document.querySelector('.banner');
  const recomendation = document.querySelector('.recomendation');
  const headingRec = document.querySelector('.heading-rec');



  banner.style.color = isDarkMode ? 'var(--header-btn-light)' : 'var(--header-btn-dark)';
  banner.style.backgroundColor = isDarkMode ? 'var(--banner-bg)' : 'var(--White)';

  //for the recomendarion section ---
  headingRec.style.color = isDarkMode ? 'var(--header-btn-light)' : 'var(--header-btn-dark)';
  recomendation.style.backgroundColor = isDarkMode ? 'var(--recomendation-bg)' : 'var(--White)';
}

function squareButton(isDarkMode) {
  const btndarkmode = Array.from(document.getElementsByClassName('square-button'));// select the all btns in a array 

  btndarkmode.forEach(btnDarkLight => { // using for-each loop apply all effect in the all class .
    btnDarkLight.style.backgroundColor = isDarkMode ? 'var(--White)' : 'var(--header-btn-dark)';
    btnDarkLight.style.color = isDarkMode ? 'var(--Black)' : 'var(--White)';
  });
}
// Function to toggle card background and title text color based on dark mode

function Cardsbg(isDarkMode) {
  // Select all elements with the class 'card' and convert the collection to an array
  const cardBackground = Array.from(document.getElementsByClassName('card'));

  // Loop through each card element and set its background color based on dark mode
  cardBackground.forEach(cardsBgDarkLight => {
    cardsBgDarkLight.style.backgroundColor = isDarkMode ? 'var(--cards-color)' : 'var(--White)';
  });

  // Select all elements with the class 'cards-title'
  const cardsTitles = document.querySelectorAll('.cards-title');

  // Loop through each 'cardsTitles' element and set its text color based on dark mode
  cardsTitles.forEach(cardsTitle => {
    cardsTitle.style.color = isDarkMode ? 'var(--White)' : 'var(--Black)';
  });
}




darkLightMode(); // first call the function for the default state -- that is dark

switchCheckbox.addEventListener('change', function () {
  darkLightMode(); // when you checked, it again calls the function, and then enables the dark mode options
});



// here have a text aniamtion in the banner . the animation is in a time interval the text will delete and then type another . it will so on 
// An array containing the texts to be displayed in the animation

const texts = [
  'Wellcome to my Website. . .',
  'Explore Coding Univerce. . .',
  'Lets contrubute and colabrate. . .'
];

// Index to keep track of the current text in the array
let index = 0;

// Index to keep track of the current character being displayed or deleted
let charIndex = 0;

// A flag to indicate whether the animation is currently deleting text
let isDeleting = false;

// Function to handle the typing and deleting animation
function typeText() {
  // Get the current text from the array
  const currentText = texts[index];

  // Get the HTML element where the text will be displayed
  const textElement = document.getElementById('text-anime');

  // Check if the animation is in the deleting phase
  if (isDeleting) {
    // Delete one character from the displayed text
    textElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    // Type one character from the current text
    textElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  // Check if the typing is complete and start deleting
  if (!isDeleting && charIndex === currentText.length + 1) {
    isDeleting = true;
    // Wait for a short duration before starting to delete
    setTimeout(typeText, 500);
  }
  // Check if the deleting is complete and move to the next text
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    // Move to the next text in the array
    index = (index + 1) % texts.length;
    // Wait for a short duration before typing the next text
    setTimeout(typeText, 500);
  }
  // Continue typing or deleting with a short delay
  else {
    setTimeout(typeText, isDeleting ? 50 : 150);
  }
}

// Start the typing animation when the script is executed
typeText();


