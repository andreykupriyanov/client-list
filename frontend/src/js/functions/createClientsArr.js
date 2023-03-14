export function createClientsArr(arr) {
  const clientsArr = [];

  for (const item of arr) {
    const fullname = `${item.surname} ${item.name} ${item.lastName}`;

    const client = {
      id: item.id,
      fullname: fullname,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
      contacts: item.contacts
    }

    clientsArr.push(client);
  }

  return clientsArr;
}
