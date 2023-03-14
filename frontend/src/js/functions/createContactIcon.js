import { createTooltip } from "./createTooltip";

export function createContactIcon(arrayItem) {
  const contact = document.createElement('div');
  const contactLink = document.createElement('a');
  const contactTooltip = createTooltip(arrayItem.type, arrayItem.value)

  contactLink.setAttribute("aria-describedby", "contact-tooltip");

  contact.classList.add('contacts__item', 'contact');
  contactLink.classList.add('contact__link');
  contactTooltip.classList.add('contact__tooltip');

  contact.append(contactLink, contactTooltip);

  contactLink.href = `https://${arrayItem.value}`;

  if (arrayItem.type == 'Vk') {
    contactLink.innerHTML = `<svg class="contact__svg"><use xlink:href="./img/icons.svg#icon-vk"></use></svg>`;
  }

  if (arrayItem.type == 'Facebook') {
    contactLink.innerHTML = `<svg class="contact__svg"><use xlink:href="./img/icons.svg#icon-fb"></use></svg>`;
  }

  if (arrayItem.type == 'Телефон') {
    contactLink.innerHTML = `<svg class="contact__svg"><use xlink:href="./img/icons.svg#icon-tel"></use></svg>`;
  }

  if (arrayItem.type == 'Доп. телефон') {
    contactLink.innerHTML = `<svg class="contact__svg"><use xlink:href="./img/icons.svg#icon-tel"></use></svg>`;
  }

  if (arrayItem.type == 'Email') {
    contactLink.innerHTML = `<svg class="contact__svg"><use xlink:href="./img/icons.svg#icon-mail"></use></svg>`;
  }

  if (arrayItem.type == 'Другое') {
    contactLink.innerHTML = `<svg class="contact__svg"><use xlink:href="./img/icons.svg#icon-other"></use></svg>`;
  }

  return contact;
}
