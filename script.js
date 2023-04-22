const toggleBtn = document.querySelector('#toggle-btn');
const stylesheet1 = document.querySelector('link[href="./style/darkstyle.css"]');
const stylesheet2 = document.querySelector('link[href="./style/style.css"]');

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  toggleBtn.checked = true;
  enableDarkTheme();
} else {
  toggleBtn.checked = false;
  enableLightTheme();
}

toggleBtn.addEventListener('change', function() {
  if (toggleBtn.checked) {
    enableDarkTheme();
    localStorage.setItem('theme', 'dark');
  } else {
    enableLightTheme();
    localStorage.setItem('theme', 'light');
  }
});

function enableDarkTheme() {
  stylesheet1.setAttribute('href', './style/style.css');
  stylesheet2.setAttribute('href', './style/darkstyle.css');
}

function enableLightTheme() {
  stylesheet1.setAttribute('href', './style/darkstyle.css');
  stylesheet2.setAttribute('href', './style/style.css');
}