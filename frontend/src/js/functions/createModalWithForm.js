import { createLabel } from './createLabel';
import { onClose } from './onClose';
import { enableScroll } from './enableScroll';
import { createNewContact } from './createNewContact';
import { parseFullname } from './parseFullname';
import { createClientData } from './createClientData';
import { formValidate } from './formValidate';
import { addNewClient } from './addNewClient';

export function createModalWithForm(client, { onSave, onClose }) {
  const modalOverlay = document.createElement('div');
  const modal = document.createElement('div');
  const modalHeader = document.createElement('div');
  const modalHeaderContainer = document.createElement('div');
  const modalTitle = document.createElement('h2');
  const form = document.createElement('form');
  const list = document.createElement('ul');
  const listContainer = document.createElement('div');
  const name = document.createElement('input');
  const lastName = document.createElement('input');
  const surname = document.createElement('input');
  const formContacts = document.createElement('div');
  const formContactsContainer = document.createElement('div');
  const formContactsList = document.createElement('ul');
  const addContactBtn = document.createElement('button');
  const saveBtn = document.createElement('button');
  const closeBtn = document.createElement('button');
  const formInputs = [name, lastName, surname];

  const closeModal = () => {
    modal.classList.add('modal--close');
    modalOverlay.classList.add('modal-overlay--close');
    setTimeout(onClose, 600, modalOverlay);
    setTimeout(enableScroll, 600);
  }

  modalOverlay.classList.add('modal-overlay');
  modal.classList.add('modal');
  modalHeader.classList.add('modal__header', 'modal-header');
  modalTitle.classList.add('modal__title');
  form.classList.add('modal__form', 'form');
  list.classList.add('form__list', 'form-list', 'list-reset');
  name.classList.add('form-item__input', 'input', 'input--firstname', 'validating-input');
  lastName.classList.add('form-item__input', 'input', 'input--lastname');
  surname.classList.add('form-item__input', 'input', 'input--surname', 'validating-input');
  saveBtn.classList.add('form__save-btn', 'modal-main-btn', 'btn-reset');
  closeBtn.classList.add('modal-close-btn', 'btn-reset');
  modalHeaderContainer.classList.add('modal-header__container', 'container', 'container--modal');
  listContainer.classList.add('form-list__container', 'container', 'container--modal');
  formContacts.classList.add('form__contacts', 'form-contacts');
  formContactsContainer.classList.add('form-contacts__container', 'container', 'container--modal', 'flex');
  formContactsList.classList.add('form-contacts__list', 'list-reset');
  addContactBtn.classList.add('form-contacts__add-contact-btn', 'add-contact-btn', 'btn-reset');

  formInputs.forEach(e => {
    e.autocomplete = 'off';
    e.setAttribute('required', '');
  });

  modalTitle.textContent = 'Новый клиент';
  saveBtn.innerHTML = 'Сохранить';
  closeBtn.textContent = 'Отменить';
  closeBtn.innerHTML = `<svg><use xlink:href="./img/icons.svg#close-btn"></use></svg>`;
  addContactBtn.innerHTML = `<span class="add-contact-btn__txt">Добавить контакт</span>`;

  modalHeader.append(modalHeaderContainer);
  modalHeaderContainer.append(modalTitle);
  modal.append(modalHeader);

  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  formContactsContainer.append(formContactsList, addContactBtn);
  formContacts.append(formContactsContainer);
  form.append(formContacts, saveBtn);
  modal.append(form, closeBtn);

  if (client) {
    const clientId = document.createElement('span');
    const deleteBtn = document.createElement('button');
    const contacts = client.contacts;
    const fullClientName = parseFullname(`${client.fullname}`);

    clientId.classList.add('modal__id');
    deleteBtn.classList.add('modal__delete-contact-btn', 'modal-minor-btn', 'btn-reset');

    clientId.innerHTML = `ID: <span class="modal-id__span">${client.id}</span>`;

    deleteBtn.textContent = 'Удалить клиента';
    modalTitle.textContent = 'Изменить клиента';

    modalHeader.append(clientId);

    name.value = fullClientName.name;
    lastName.value = fullClientName.middleName;
    surname.value = fullClientName.surname;

    for (const contact of contacts) {
      const newContact = createNewContact(contact);
      formContactsList.append(newContact);
    }

    form.append(deleteBtn);
  }

  list.append(listContainer);
  form.prepend(list);

  formInputs.forEach(input => {
    const formItem = document.createElement('li');
    const label = createLabel(input);

    formItem.classList.add('form__item', 'form-item');
    formItem.append(input, label);
    listContainer.append(formItem);

    input.addEventListener('input', e => {
      input.classList.remove('validate-error');
    });
  });

  addContactBtn.addEventListener('click', e => {
    e.preventDefault();
    const contactsList = document.querySelectorAll('.form-contacts-list-item');
    console.log(contactsList.length);

    const contact = createNewContact(false, contactsList);
    formContactsList.append(contact);

    if (contactsList.length > 8) {
      addContactBtn.remove();
    }
  });

  saveBtn.addEventListener('click', e => {
    e.preventDefault();

    const clientData = createClientData();
    const isValidate = formValidate();

    console.log('clientData', clientData);

    if (isValidate) {
      if (client) {
        onSave(client.id, clientData, modalOverlay);
      } else {
        addNewClient(clientData, modalOverlay);
      }
    }
  });

  closeBtn.addEventListener('click', e => {
    e.preventDefault();
    closeModal();
  });

  modalOverlay.append(modal);
  document.body.append(modalOverlay);
}
