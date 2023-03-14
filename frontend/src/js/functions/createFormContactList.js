import _vars from "../_vars";
import { createSelect } from "./createSelect";
import { createTooltip } from "./createTooltip";

export function createFormContactList(data) {
  const contacts = document.createElement('div');
  const contactsContainer = document.createElement('div');
  const contactsList = document.createElement('ul');
  const addContactBtn = document.createElement('button');

  addContactBtn.innerHTML = `<span class="add-contact-btn__txt">Добавить контакт</span>`;

  let contactCounter = 0;

  contacts.append(contactsContainer);
  contactsContainer.append(contactsList, addContactBtn);

  const createContact = (contactData) => {
    const contact = document.createElement('li');
    const contactSelect = createSelect(_vars.contactTypeArr, data);
    const contactInput = document.createElement('input');
    const contactDeleteBtnWrapper = document.createElement('div');
    const contactDeleteBtn = document.createElement('button');
    const contactDeleteBtnTooltip = createTooltip('Удалить контакт');

    contact.classList.add('form-contacts-list__item', 'form-contacts-list-item');
    contactInput.classList.add('form-contacts-list-item__input', 'validating-input');
    contactDeleteBtn.classList.add('btn-reset', 'form-contacts-list-item__delete-btn');
    contactDeleteBtnWrapper.classList.add('form-contacts-list-item__delete-btn-wrapper');
    contactDeleteBtnTooltip.classList.add('form-contacts-list-item__delete-btn-tooltip', 'tooltip');

    contactDeleteBtn.setAttribute("aria-describedby", "contact-tooltip");

    contactDeleteBtnWrapper.append(contactDeleteBtn, contactDeleteBtnTooltip);

    contactInput.placeholder = 'Введите данные контакта';
    contactDeleteBtnTooltip.textContent = 'Удалить контакт';
    contactDeleteBtn.innerHTML = `<svg><use xlink:href="./img/icons.svg#icon-delete"></use></svg>`;

    if (contactData) {
      contactInput.value = `${data.value}`;
      console.log(data);
    };

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
    });

    contact.append(contactSelect, contactInput);

    if (contactInput.value !== '') {
      contact.append(contactDeleteBtnWrapper);
      contactInput.classList.add('with-delete-btn');
    }

    return contact
  }

  if (data) {
    for (const elem of data) {
      console.log(elem);
      const newContact = createContact(data);
      contactsList.append(newContact);
      contactCounter += 1;
    }
  }

  addContactBtn.addEventListener('click', e => {
    e.preventDefault();

    contactCounter += 1;

    console.log(contactCounter);
    const contacts = document.querySelectorAll('.form-contact-list-item');

    if (contacts.length !== 0) {
      formContactsList.prepend(createNewContact());
    } else {
      addContactBtn.before(formContactsList);
      formContactsList.prepend(createNewContact());
    }

    if (contactCounter > 9) {
      addContactBtn.remove();
    }
  });

  contacts.classList.add('form__contacts', 'form-contacts');
  contactsContainer.classList.add('form-contacts__container', 'container', 'container--modal', 'flex');
  addContactBtn.classList.add('form-contacts__add-contact-btn', 'add-contact-btn', 'btn-reset');

  return contacts
}
