import _vars from "../_vars";
import { searchClient } from "../functions/searchClient";

(function () {
  const header = document.createElement('header');
  const headerContainer = document.createElement('div');
  const logo = document.createElement('a');
  const logoImg = document.createElement('img');
  const headerForm = document.createElement('form');
  const headerInput = document.createElement('input');
  const searchResults = _vars.searchResults;

  header.classList.add('header');
  headerContainer.classList.add('header__container', 'container', 'flex');
  logo.classList.add('header__logo', 'logo');
  headerForm.classList.add('header__form', 'header-form');
  headerInput.classList.add('header-form__input', 'logo');
  searchResults.classList.add('header-form__search-results', 'search-results');

  logoImg.src = './img/logo.svg';
  headerInput.placeholder = 'Введите текст';
  headerInput.type = 'search';

  logo.append(logoImg);
  headerForm.append(headerInput, searchResults);
  headerContainer.append(logo, headerForm);
  header.append(headerContainer);
  _vars.siteContainer.prepend(header);

  headerInput.addEventListener('input', e => {
    e.preventDefault();

    searchClient(headerInput.value);

    if (headerInput.value === "") {
      _vars.searchResults.innerHTML = "";
    }
  });
})();
