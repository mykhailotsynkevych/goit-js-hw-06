const textInput = document.querySelector("#validation-input");
const inputLength = Number(textInput.dataset.length);


textInput.addEventListener("blur", (event) => {

if (event.currentTarget.value.length !== inputLength) {
    textInput.classList.add('invalid')
} else  {
    textInput.classList.replace('invalid', 'valid')
}
});
