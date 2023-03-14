import { createClient } from "./createClient";
import { createClientsArr } from "./createClientsArr";

export async function addClientsList() {
  const response = await fetch('http://localhost:3005/api/clients');
  const data = await response.json();
  const clientsArr = createClientsArr(data);

  createClient(clientsArr);
}
