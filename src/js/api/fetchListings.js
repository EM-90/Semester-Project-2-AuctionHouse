import { processListings } from "../UI/processListings.js";
import { listingsUrl } from "./urls/all-urls.js";

export async function fetchListings(queryParams = "") {
  try {
    const response = await fetch(`${listingsUrl}${queryParams}`);
    const apiResults = await response.json();
    if (response.ok) {
      processListings(apiResults);
    }
  } catch (error) {
    console.error("Error fetching listings:", error);
  }
}
