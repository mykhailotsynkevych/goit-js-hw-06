// btn.addEventListener("click", getRandomHexColor);

// function getRandomHexColor() {
//   return (body.style.backgroundColor = `#${Math.floor(
//     Math.random() * 16777215
//   ).toString(16)}`);
// }

// btn.addEventListener("click", (event) => {
//   colorValue.textContent = body.style.backgroundColor;
// });

const btn = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorValue = document.querySelector(".color");

btn.addEventListener("click", onClrBtnClick);

function getRandomHexColor() {
  return `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
}

function onClrBtnClick() {
  let currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  colorValue.textContent = currentColor;
}
