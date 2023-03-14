export default {
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  siteContainer: document?.querySelector('.site-container'),
  crmContainer: document?.querySelector('.crm__container'),
  tableBody: document?.createElement('tbody'),
  searchResults: document?.createElement('div'),
  sortedParams: {},
  contactTypeArr: [
    'Телефон',
    'Доп. телефон',
    'Email',
    'Vk',
    'Facebook',
    'Другое'
  ]
}
