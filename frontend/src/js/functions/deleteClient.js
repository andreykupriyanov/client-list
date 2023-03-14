export async function deleteClient(id) {
  const response = await fetch(`http://localhost:3005/api/clients/${id}`, {
    method: 'DELETE'
  });
}
