import _vars from "../_vars";
import { disableScroll } from "./disableScroll";
import { createDate } from "./createDate";
import { createContactIcon } from "./createContactIcon";
import { createModalWithForm } from "./createModalWithForm";
import { createDeleteModal } from "./createDeleteModal";
import { onSave } from "./onSave";
import { onClose } from "./onClose";

export function createClient(arr) {
  for (const client of arr) {
    const row = document.createElement('tr');
    const id = document.createElement('td');
    const name = document.createElement('td');
    const dateOfCreate = document.createElement('td');
    const dateOfChanges = document.createElement('td');
    const contacts = document.createElement('td');
    const actions = document.createElement('td');
    const toChange = document.createElement('button');
    const toDelete = document.createElement('button');

    row.classList.add('crm-table-body__row', 'client');
    id.classList.add('client__id');
    name.classList.add('client__name');
    dateOfCreate.classList.add('client__date-create', 'client-date');
    dateOfChanges.classList.add('client__date-changes', 'client-date');
    contacts.classList.add('client__contacts', 'client-contacts', 'contacts');
    actions.classList.add('client__actions', 'client-actions');
    toChange.classList.add('btn-reset', 'client-actions__link', 'client-actions__link--change');
    toDelete.classList.add('btn-reset', 'client-actions__link', 'client-actions__link--delete');

    toChange.addEventListener('click', e => {
      e.preventDefault();
      createModalWithForm(client, {
        onSave,
        onClose
      });
      disableScroll();
    });

    toDelete.addEventListener('click', e => {
      e.preventDefault();
      createDeleteModal(client.id);
      disableScroll();
    });

    id.innerHTML = `${client.id}`;
    name.innerHTML = `<a href='client.html?id=${client.id}'>${client.fullname}</a>`;
    dateOfCreate.innerHTML = createDate(client.createdAt);
    dateOfChanges.innerHTML = createDate(client.updatedAt);
    toChange.innerHTML = 'Изменить';
    toDelete.innerHTML = 'Удалить';

    const clientContacts = client.contacts;

    if (clientContacts.length > 5) {
      const contactsContainer = document.createElement('div');

      for (let i = 0; i < 4; i++) {
        const clientContact = clientContacts[i];
        const contactIcon = createContactIcon(clientContact);

        contactsContainer.classList.add('contacts__container');

        contactsContainer.append(contactIcon);
        contacts.append(contactsContainer);
      }

      const addMoreContacts = document.createElement('button');
      addMoreContacts.classList.add('btn-reset', 'contact', 'contact__more-btn');
      addMoreContacts.textContent = `+${+(clientContacts.length - 4)}`;
      contactsContainer.append(addMoreContacts);

      addMoreContacts.addEventListener('click', e => {
        e.preventDefault();
        const contactsContainer = document.createElement('div');

        for (let i = 4; i < clientContacts.length; i++) {
          const clientContact = clientContacts[i];
          const contactIcon = createContactIcon(clientContact);

          contactsContainer.classList.add('contacts__container');

          addMoreContacts.remove();
          contactsContainer.append(contactIcon);
          contacts.append(contactsContainer);
        }
      });

    } else {
      const contactsContainer = document.createElement('div');

      for (const clientContact of clientContacts) {
        const contactIcon = createContactIcon(clientContact);
        contactsContainer.classList.add('contacts__container');

        contactsContainer.append(contactIcon);
      }
      contacts.append(contactsContainer);
    }

    actions.append(toChange, toDelete);
    row.append(id, name, dateOfCreate, dateOfChanges, contacts, actions);
    _vars.tableBody.append(row);
  }
}
