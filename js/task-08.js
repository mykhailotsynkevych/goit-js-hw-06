const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  const elements = { email, password };

  if (email === "" || password === "") {
    return alert("Всі поля повинні бути заповнені!");
  }

  console.log(elements);
  event.currentTarget.reset();
}
