export function createSearchResult(arr) {
  const resultsList = document.createElement('ul');

  resultsList.classList.add('search-results__list', 'list-reset');

  for (const elem of arr) {
    const result = document.createElement('li');
    const id = document.createElement('div');
    const name = document.createElement('div');

    result.classList.add('search-results__item');
    id.classList.add('search-results__id');
    id.classList.add('search-results__name');

    id.textContent = elem.id;
    name.textContent = elem.fullname;

    result.append(id, name);
    resultsList.append(result);
  }

  return resultsList
}
