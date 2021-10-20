const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  const formData = { email, password };

  if (email === '' || password === '') {
    return alert('Внимание! Все поля должны быть заполнены');
  }

  console.log(formData);
  event.currentTarget.reset();
}
