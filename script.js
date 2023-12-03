console.log("successful!");



let switchCheckbox = document.getElementById('switch');


// dark mode light mode function is here.--
function darkLightMode() {
    const isSwitchChecked = !switchCheckbox.checked; // Change to !switchCheckbox.checked for dark mode by default
    const isDarkMode = isSwitchChecked; // when checked dark mode enable .

    
    headerContent(isDarkMode); // for the header bg and text change with toggling 
    imageToggle(isDarkMode); // banner image toggle change 
    BannerLayout(isDarkMode); // this is for the bg of banner --
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
    const logo = document.getElementById('logo');
    const navlinks = Array.from(document.getElementsByClassName('nav-links-tag'));

    navlinks.forEach(link => link.style.color = isDarkMode ? 'white' : 'black');

    headerBgElement.style.backgroundColor = isDarkMode ? 'var(--header-bg)' : 'var(--White)';
    logo.style.color = isDarkMode ? 'var(--header-btn-light)' : 'var(--header-btn-dark)';
}
function BannerLayout(isDarkMode) {
    const banner = document.querySelector('.banner');
    banner.style.color = isDarkMode ? 'var(--header-btn-light)' : 'var(--header-btn-dark)';
    console.log("hi");
}















darkLightMode(); // first call the function for the default state -- that is dark

switchCheckbox.addEventListener('change', function () {
    darkLightMode(); // when you checked, it again calls the function, and then enables the dark mode options
});
