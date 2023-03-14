export function createLabel(inputName) {
  const label = document.createElement('label');
  label.classList.add('form-item__label');

  if (inputName.classList.contains('input--firstname')) {
    label.innerHTML = `Имя<span>*</span>`;
  }

  if (inputName.classList.contains('input--lastname')) {
    label.innerHTML = 'Отчество';
  }

  if (inputName.classList.contains('input--surname')) {
    label.innerHTML = `Фамилия<span>*</span>`;
  }

  if (inputName.classList.contains('input--surname')) {
    label.innerHTML = `Фамилия<span>*</span>`;
  }

  if (inputName.classList.contains('form-contacts__input')) {
    label.innerHTML = 'Введите данные контакта';
  }

  return label;
}
