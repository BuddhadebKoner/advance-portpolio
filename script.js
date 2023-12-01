console.log("successful!");

var switchCheckbox = document.getElementById('switch');
var headerElement = document.querySelector('header');
var elements = document.querySelector('.elements');
// access cover images light and dark
var darkImg = document.getElementById('dark-img');
var lightImg = document.getElementById('light-img');
// for banner bg
var bannerBg = document.querySelector('.banner');

function darkLightMode() {
    const isSwitchChecked = switchCheckbox.checked;
    const isDarkMode = isSwitchChecked;

    headerElement.classList.toggle('light-mode', !isDarkMode);
    headerElement.classList.toggle('dark-mode', isDarkMode);
    elements.classList.toggle('elements-checked', isSwitchChecked);

    darkImg.style.display = isDarkMode ? 'block' : 'none';
    lightImg.style.display = isDarkMode ? 'none' : 'block';

    // Toggle banner background color
    bannerBg.style.backgroundColor = isDarkMode ? 'black' : 'white';
}

darkLightMode();
switchCheckbox.addEventListener('change', function () {
    darkLightMode();
});
