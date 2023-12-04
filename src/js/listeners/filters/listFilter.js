import { fetchListings } from "../../api/fetchListings.js";

export async function filterListings() {
  const searchInput = document.getElementById("searchField").value;
  const active = true;

  let queryParams = `?_active=${active}`;
  if (searchInput) {
    queryParams += `&_tag=${encodeURIComponent(searchInput)}`;
  }

  await fetchListings(queryParams);
}
