import { sortOfList } from "./sortOfList";

export function createTableHeader() {
  const tableHeader = document.createElement('thead');
  const tableHeaderRow = document.createElement('tr');
  const id = document.createElement('th');
  const fullname = document.createElement('th');
  const creationTime = document.createElement('th');
  const changesTime = document.createElement('th');
  const contacts = document.createElement('th');
  const actions = document.createElement('th');

  id.innerHTML = `<button class="crm-table-header__btn btn-reset"><span class="sorting-item__txt">ID</span><svg class="sorting-item__svg"><use xlink:href="./img/icons.svg#arrow"></use></svg></button>`;
  fullname.innerHTML = `<button class="crm-table-header__btn btn-reset"><span class="sorting-item__txt">Фамилия Имя Отчество</span><svg class="sorting-item__svg"><use xlink:href="./img/icons.svg#arrow"></use></svg><span class="sorting-item__s-text">А-Я</span></button>`;
  creationTime.innerHTML = `<button class="crm-table-header__btn btn-reset"><span class="sorting-item__txt">Дата и время создания</span><svg class="sorting-item__svg"><use xlink:href="./img/icons.svg#arrow"></use></svg></button>`;
  changesTime.innerHTML = `<button class="crm-table-header__btn btn-reset"><span class="sorting-item__txt">Последние изменения</span><svg class="sorting-item__svg"><use xlink:href="./img/icons.svg#arrow"></use></svg></button>`;
  contacts.textContent = "Контакты";
  actions.textContent = "Действия";

  tableHeader.classList.add('crm-table__header', 'crm-table-header');
  tableHeaderRow.classList.add('crm-table-header__row');
  id.classList.add('column-title', 'column-title--id', 'sorting-item');
  fullname.classList.add('column-title', 'column-title--fullname', 'sorting-item');
  creationTime.classList.add('column-title', 'column-title--creationTime', 'sorting-item');
  changesTime.classList.add('column-title', 'column-title--changesTime', 'sorting-item');
  contacts.classList.add('column-title', 'column-title--contacts');
  actions.classList.add('column-title', 'column-title--actions');

  id.addEventListener('click', e => {
    e.preventDefault();
    sortOfList('id', id);
  });

  fullname.addEventListener('click', e => {
    e.preventDefault();
    sortOfList('fullname', fullname);
  });

  creationTime.addEventListener('click', e => {
    e.preventDefault();
    sortOfList('createdAt', creationTime);
  });

  changesTime.addEventListener('click', e => {
    e.preventDefault();
    sortOfList('updatedAt', changesTime);
  });

  tableHeaderRow.append(id, fullname, creationTime, changesTime, contacts, actions);
  tableHeader.append(tableHeaderRow);

  return tableHeader;
}

