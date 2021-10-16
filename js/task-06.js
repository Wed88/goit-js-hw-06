const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  inputEl.classList.add('invalid');
  if (event.currentTarget.value.length * 1 === inputEl.dataset.length * 1) {
    inputEl.classList.replace('invalid', 'valid');
  }
}
