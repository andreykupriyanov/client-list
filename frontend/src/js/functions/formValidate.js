export function formValidate() {
  const name = document.querySelector('.input--firstname');
  const surname = document.querySelector('.input--surname');
  const contacts = document.querySelector('.form-contact');
  const errorFielders = document.querySelectorAll('.validate-error');
  const formError = document.createElement('div');
  const validatingInputs = document.querySelectorAll('.validating-input');
  let errorsArr = [];



  for (const fielder of errorFielders) {
    fielder.classList.remove('validate-error');
  }

  for (const input of validatingInputs) {
    if (input.value === '') {
      input.classList.add('validate-error');
      errorsArr.push(input);

      input.addEventListener('input', e => {
        e.preventDefault();
        e.currentTarget.classList.remove('validate-error');
        if (e.currentTarget.value === '') {
          console.log('asdasdasd');
          e.currentTarget.classList.add('validate-error');
          errorsArr.push(e.currentTarget);
        }
      });
    }
  }

  formError.classList.add('form__error');

  const errors = document.querySelectorAll('.form__error');
  if (errors.length != 0) {
    for (const error of errors) {
      error.remove();
    }
  }

  if (name.value === '' && surname.value === '') {
    name.classList.add('validate-error');
    surname.classList.add('validate-error');
    contacts.after(formError);

    errorsArr.push(name, surname);
  }

  if (name.value === '') {
    name.classList.add('validate-error');
    errorsArr.push(name);
  }

  if (surname.value === '') {
    surname.classList.add('validate-error');
    errorsArr.push(surname);
  }

  console.log(errors.length);

  if (errorsArr.length === 0) {
    return true
  } else {
    formError.textContent = 'Ошибка: вы заполнинили не все поля';
    contacts.after(formError);
  }
}
