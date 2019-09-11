import refs from './refs.js';

const Themes = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.theme.addEventListener('change', changeTheme);

function changeTheme(e) {
  if (e.target.checked) {
    darkTheme();
  } else {
    lightTheme();
  }
  localStorage.setItem('valueCheckbox', e.target.checked);
}
const valueCheckboxInput = localStorage.getItem('valueCheckbox');

function darkTheme() {
  refs.themeOnBody.classList.remove(Themes.LIGHT);
  refs.themeOnBody.classList.add(Themes.DARK);
}

function lightTheme() {
  refs.themeOnBody.classList.remove(Themes.DARK);
  refs.themeOnBody.classList.add(Themes.LIGHT);
}

if (valueCheckboxInput === 'true') {
  refs.themeOnBody.classList.add(Themes.DARK);
  refs.input.checked = true;
} else {
  refs.themeOnBody.classList.add(Themes.LIGHT);
  refs.input.checked = false;
}