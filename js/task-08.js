const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (
    event.currentTarget.elements.email.value === '' ||
    event.currentTarget.elements.password.value === ''
  ) {
    return console.log('Внимание! Все поля должны быть заполнены');
  }

  console.log(`${email.name}: ${email.value}, ${password.name}: ${password.value}`);

  event.currentTarget.reset();
}
