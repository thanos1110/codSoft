const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav')
const toggleIcon = document.getElementById('toggle-icon')
const image3 = document.getElementById('image3')
const textBox = document.getElementById('text-box')
const changeText = document.getElementById('change-text')

//for (dry) image
function imageMode(color) {
    image3.src = `image/Project3/${color}mode.png`
}


//Dark Mode
function darkMode() {
    textBox.style.backgroundColor = 'rgba(255,255,255,0.5)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('Dark')
}
//Light Mode
function lightMode() {
    textBox.style.backgroundColor = 'rgba(0,0,0,0.5)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('Light')
}

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
        darkMode();
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')
        lightMode();
    }
}



toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme')
console.log(currentTheme);
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)
}

if (currentTheme == 'dark') {
    toggleSwitch.checked = true;
    darkMode();
}