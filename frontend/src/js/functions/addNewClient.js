import _vars from '../_vars';
import { addClientsList } from './addClientsList';
import { enableScroll } from './enableScroll';

export async function addNewClient(formData, modalElement) {
  const response = await fetch('http://localhost:3005/api/clients', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      name: `${formData.name}`,
      surname: `${formData.surname}`,
      lastName: `${formData.lastName}`,
      contacts: formData.contactArr
    })
  });

  const data = await response.json();
  console.log(data);
  _vars.tableBody.innerHTML = "";
  addClientsList();
  modalElement.remove();
  enableScroll();
}
