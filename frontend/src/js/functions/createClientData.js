export function createClientData() {
  const contact = document.querySelectorAll('.form-contacts-list-item');
  const name = document.querySelector('.input--firstname');
  const lastName = document.querySelector('.input--lastname');
  const surname = document.querySelector('.input--surname');
  let contactArr = [];

  contact.forEach(e => {
    const selectedContactType = e.querySelector('.select__current').textContent;
    const contactValue = e.querySelector('.form-contacts-list-item__input');

    contactArr.push({
      type: selectedContactType,
      value: contactValue.value
    });
  });

  console.log('contactArr', contactArr);

  const createClientData = {
    name: name.value,
    lastName: lastName.value,
    surname: surname.value,
    contactArr
  }

  return createClientData;
}
