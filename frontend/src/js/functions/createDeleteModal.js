import _vars from '../_vars';
import { deleteClient } from './deleteClient';
import { addClientsList } from './addClientsList';
import { enableScroll } from './enableScroll';

export function createDeleteModal(id) {
  const modalOverlay = document.createElement('div');
  const modalElement = document.createElement('div');
  const modalContainer = document.createElement('div');
  const modalTitle = document.createElement('h2');
  const modalDescr = document.createElement('p');
  const modalCloseBtn = document.createElement('button');
  const modalDeleteBtn = document.createElement('button');
  const modalCancelBtn = document.createElement('button');

  modalOverlay.classList.add('modal-overlay');
  modalElement.classList.add('modal' , 'delete-client-modal');
  modalContainer.classList.add('delete-client-modal__container', 'container', 'container--modal', 'flex');
  modalTitle.classList.add('modal__title', 'delete-client-modal__title');
  modalDescr.classList.add('delete-client-modal__descr');
  modalDeleteBtn.classList.add('modal-main-btn', 'delete-client-modal__remove-btn', 'btn-reset');
  modalCancelBtn.classList.add('modal-minor-btn', 'delete-client-modal__cancel-btn', 'btn-reset');
  modalCloseBtn.classList.add('btn-reset', 'modal-close-btn');

  modalTitle.textContent = 'Удалить клиента';
  modalDescr.textContent = 'Вы действительно хотите удалить данного клиента?';
  modalDeleteBtn.textContent = 'Удалить';
  modalCancelBtn.textContent = 'Отменить';

  modalCloseBtn.innerHTML = `<svg><use xlink:href="./img/icons.svg#close-btn"></use></svg>`;

  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) {
      modalOverlay.remove();
      enableScroll();
    }
  });

  modalDeleteBtn.addEventListener('click', e => {
    e.preventDefault();
    deleteClient(id);
    modalOverlay.remove();
    _vars.tableBody.innerHTML = '';
    addClientsList();
    enableScroll();
  });

  modalCancelBtn.addEventListener('click', e => {
    e.preventDefault();
    modalOverlay.remove();
    enableScroll();
  });

  modalCloseBtn.addEventListener('click', e => {
    e.preventDefault();
    modalOverlay.remove();
    enableScroll();
  });

  modalContainer.append(modalTitle, modalDescr, modalDeleteBtn, modalCancelBtn);
  modalElement.append(modalContainer, modalCloseBtn);
  modalOverlay.append(modalElement);
  document.body.append(modalOverlay);
}
