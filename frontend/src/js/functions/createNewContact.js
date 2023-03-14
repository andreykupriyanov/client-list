import _vars from "../_vars";
import { createSelect } from "./createSelect";
import { createTooltip } from "./createTooltip";
import { formContactsContainer } from "./createModalWithForm";
import { addContactBtn } from "./createModalWithForm";

export function createNewContact(data, contactsList) {
  const contact = document.createElement('li');
  const contactSelect = createSelect(_vars.contactTypeArr, data);
  const contactInput = document.createElement('input');
  const contactDeleteBtnWrapper = document.createElement('div');
  const contactDeleteBtn = document.createElement('button');
  const contactDeleteBtnTooltip = createTooltip('Удалить контакт');

  contactDeleteBtnTooltip.textContent = 'Удалить контакт';
  contactDeleteBtn.innerHTML = `<svg><use xlink:href="./img/icons.svg#icon-delete"></use></svg>`;

  contactDeleteBtn.setAttribute("aria-describedby", "contact-tooltip");

  contactDeleteBtnWrapper.append(contactDeleteBtn, contactDeleteBtnTooltip);

  contactInput.placeholder = 'Введите данные контакта';

  if (data) {
    contactInput.value = `${data.value}`;
  };

  contact.classList.add('form-contacts-list__item', 'form-contacts-list-item');
  contactInput.classList.add('form-contacts-list-item__input', 'validating-input');
  contactDeleteBtn.classList.add('btn-reset', 'form-contacts-list-item__delete-btn');
  contactDeleteBtnWrapper.classList.add('form-contacts-list-item__delete-btn-wrapper');
  contactDeleteBtnTooltip.classList.add('form-contacts-list-item__delete-btn-tooltip', 'tooltip');

  contactInput.addEventListener('input', e => {
    if (contactInput.value !== '') {
      contact.append(contactDeleteBtnWrapper);
      contactInput.classList.add('with-delete-btn');
    } else {
      contactDeleteBtnWrapper.remove();
      contactInput.classList.remove('with-delete-btn');
    }
  });

  contactDeleteBtn.addEventListener('click', e => {
    e.preventDefault();
    contact.remove();

    console.log(contactsList);
  });

  contact.append(contactSelect, contactInput);

  if (contactInput.value !== '') {
    contact.append(contactDeleteBtnWrapper);
    contactInput.classList.add('with-delete-btn');
  }

  return contact;
}
