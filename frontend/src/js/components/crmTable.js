import _vars from "../_vars";
import { createTableHeader } from "../functions/createTableHeader";
import { addClientsList } from "../functions/addClientsList";
import { createAddClientBtn } from "../functions/createAddClientBtn";

(function() {
  const title = document.createElement('h2');
  const table = document.createElement('table');
  const tableHeader = createTableHeader();
  const tableBody = _vars.tableBody;
  const btn = createAddClientBtn();

  addClientsList();

  title.classList.add('crm__title');
  table.classList.add('crm__table', 'crm-table');
  tableBody.classList.add('crm-table__body', 'crm-table-body');

  title.textContent = "Клиенты";

  table.append(tableHeader, tableBody);
  _vars.crmContainer.append(title, table, btn);
})();
