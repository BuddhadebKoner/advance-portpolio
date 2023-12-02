console.log("successful!");

var switchCheckbox = document.getElementById('switch');
// for body bg ----------------
var BodyElement = document.querySelector('body');
// for heading backgrounf -------
var headerElement = document.querySelector('header');
// for the links and text in the header --
var elements = document.querySelector('.elements');
// access cover images light and dark--
var darkImg = document.getElementById('dark-img');
var lightImg = document.getElementById('light-img');
// for banner bg--
var bannerBg = document.querySelector('.banner');

function darkLightMode() {
    const isSwitchChecked = !switchCheckbox.checked; // Change to !switchCheckbox.checked for dark mode by default
    const isDarkMode = isSwitchChecked; // when checked dark mode enable .

    BodyElement.classList.toggle('light-mode', !isDarkMode); // body light mode bg
    BodyElement.classList.toggle('dark-mode', isDarkMode); // body dark mode bg

    headerElement.classList.toggle('light-mode', !isDarkMode); // header bg
    headerElement.classList.toggle('dark-mode', isDarkMode); // header bg

    elements.classList.toggle('elements-checked', isSwitchChecked); // for the text color that is var(--light-bg) , 'elements-checked' this is a class that has a var(--light-bg) bg .

    darkImg.style.display = isDarkMode ? 'block' : 'none'; // a coding bg image for the dark mode
    lightImg.style.display = isDarkMode ? 'none' : 'block';  // complement img for light

    // Toggle banner background color
    bannerBg.style.backgroundColor = isDarkMode ? 'var(--dark-bg)' : 'var(--light-bg)';
}

darkLightMode(); // first call the function for the default state -- that is dark

switchCheckbox.addEventListener('change', function () {
    darkLightMode(); // when you checked, it again calls the function, and then enables the dark mode options
});
