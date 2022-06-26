const counter = document.querySelector("#counter");

const decrementBtn = counter.firstElementChild;

const incrementBtn = counter.lastElementChild;

const value = document.querySelector("#value");


let counterValue = 0;

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;

  value.textContent = counterValue;
});
