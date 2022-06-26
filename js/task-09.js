const btn = document.querySelector('.change-color');
const body = document.querySelector('body');
const colorValue = document.querySelector('.color');

btn.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  return body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btn.addEventListener('click', (event) => {
  colorValue.textContent = body.style.backgroundColor;
});
