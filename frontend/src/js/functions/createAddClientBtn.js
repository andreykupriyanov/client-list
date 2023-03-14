import { createModalWithForm } from './createModalWithForm';
import { disableScroll } from './disableScroll';
import { onSave } from './onSave';
import { onClose } from './onClose';

export function createAddClientBtn() {
  const btn = document.createElement('button');
  btn.classList.add('btn-reset', 'crm__add-client-btn', 'add-client-btn');
  btn.innerHTML = `<svg><use xlink:href="./img/icons.svg#icon-client"></use></svg><span>Добавить клиента</span>`;

  btn.addEventListener('click', e => {
    e.preventDefault();
    createModalWithForm(false, { onSave, onClose });
    disableScroll();
  });

  return btn;
}
