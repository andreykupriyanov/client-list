import _vars from "../_vars";

export function createSelect(arr, data) {
  const select = document.createElement('div');
  const selectHeader = document.createElement('div');
  const selectCurrent = document.createElement('span');
  const selectIcon = document.createElement('div');
  const selectBody = document.createElement('div');

  selectCurrent.textContent = arr[0];

  for (const contact of arr) {
    const selectItem = document.createElement('div');
    selectItem.classList.add('select__item');
    selectItem.textContent = contact;

    selectBody.append(selectItem);

    if (data && data.type === contact) {
      selectCurrent.textContent = data.type;
    }

    selectItem.addEventListener('click', e => {
      selectCurrent.textContent = selectItem.textContent;
      select.classList.remove('is-active');
    });
  }

  select.classList.add('form-contact-list-item__select', 'select');
  selectHeader.classList.add('select__header');
  selectCurrent.classList.add('select__current');
  selectIcon.classList.add('select__icon');
  selectBody.classList.add('select__body');

  selectIcon.innerHTML = `<svg><use xlink:href="./img/icons.svg#select-arrow"></use></svg>`;

  selectHeader.append(selectCurrent, selectIcon);
  select.append(selectHeader, selectBody);

  selectHeader.addEventListener('click', e => {
    e.preventDefault();
    select.classList.toggle('is-active');
  });

  document.addEventListener('click', e => {
    if (e.target !== selectCurrent && e.target !== selectHeader && e.target !== selectHeader.childNodes) {
      select.classList.remove('is-active');
    }
  });

  return select
}
