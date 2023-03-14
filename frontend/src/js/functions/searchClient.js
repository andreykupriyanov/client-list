import _vars from "../_vars";
import { createClientsArr } from "./createClientsArr";
import { createClient } from "./createClient";
import { createSearchResult } from "./createSearchResutls";

export async function searchClient(searchString) {
  const response = await fetch(`http://localhost:3005/api/clients?search=${searchString}`);
  const data = await response.json();

  const clientsArr = createClientsArr(data);
  _vars.tableBody.innerHTML = "";
  createClient(clientsArr);
}
