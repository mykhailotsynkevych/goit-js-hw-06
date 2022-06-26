const textInput = document.querySelector("#validation-input");
const textValid = document.querySelector("valid");
// console.log(textValid);
const inputLength = Number(textInput.dataset.length);
// console.dir(inputLength);

textInput.addEventListener("blur", (event) => {
    if (event.currentTarget.value === "") {
        textInput.style.border = "2px solid #bdbdbd" }
     else if (event.currentTarget.value.length === inputLength) {
        textInput.classList.add('valid')
    } else {textInput.classList.add('invalid')}

    // event.currentTarget.value.length === inputLength ? textInput.classList.add('valid') : textInput.classList.add('invalid');
});
