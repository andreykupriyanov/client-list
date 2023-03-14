import _vars from "../_vars";
import { createClient } from "./createClient";
import { createClientsArr } from "./createClientsArr";

export async function sortOfList(field, elem) {
  const response = await fetch('http://localhost:3005/api/clients');
  const data = await response.json();
  const sortArr = createClientsArr(data);
  const sortText = elem.querySelector('.sorting-item__txt');
  const sortSvg = elem.querySelector('.sorting-item__svg');
  const sortSvgs = document.querySelectorAll('.sorting-item__svg');
  const sortTexts = document.querySelectorAll('.sorting-item__txt');
  const sortTextSmall = elem.querySelector('.sorting-item__s-text');

  if (!_vars.sortedParams[field]) {
    sortArr.sort((a, b) => a[field] > b[field] ? 1 : -1);
    sortText.classList.add('active');
    sortSvg.classList.add('active');
    sortSvg.style.opacity = "1";

    if (field == 'fullname') {
      sortTextSmall.textContent = 'А-Я';
      sortTextSmall.classList.add('active');
    } else {
      document.querySelector('.sorting-item__s-text').classList.remove('active');
    }

    _vars.tableBody.innerHTML = "";
    createClient(sortArr);
  } else {
    sortArr.sort((a, b) => a[field] < b[field] ? 1 : -1);
    sortSvg.classList.remove('active');

    if (field == 'fullname') {
      sortTextSmall.textContent = 'Я-А';
    }

    _vars.tableBody.innerHTML = "";
    createClient(sortArr);
  }

  for (let param in _vars.sortedParams) {
    if (param != field)
      _vars.sortedParams[param] = false;

      for (const sortTxt of sortTexts) {
        sortTxt.classList.remove('active');
      }

      sortText.classList.add('active');
  }

  _vars.sortedParams[field] = !_vars.sortedParams[field];
}
