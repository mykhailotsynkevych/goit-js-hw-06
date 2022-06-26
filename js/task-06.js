const textInput = document.querySelector("#validation-input");
const inputLength = Number(textInput.dataset.length);


textInput.addEventListener("blur", (event) => {

if (event.currentTarget.value.length !== inputLength) {
    textInput.classList.add('invalid')
    textInput.classList.remove('valid')
} else {
    textInput.classList.add('valid')
    textInput.classList.remove('invalid')
}
});
