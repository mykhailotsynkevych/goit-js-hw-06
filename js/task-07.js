
const rng = document.querySelector('#font-size-control');
const p = document.querySelector('#text');

rng.addEventListener("input", (event) => {
  p.style.fontSize = event.currentTarget.value +'px';
});
