import { listingsUrl } from "./urls/all-urls.js";

export async function fetchListings(queryParams = "") {
  try {
    const response = await fetch(`${listingsUrl}${queryParams}`);
    if (response.ok) {
      return await response.json();
    } else {
      console.error("Error fetching listings: Response was not OK");
      return [];
    }
  } catch (error) {
    console.error("Error fetching listings:", error);
    return [];
  }
}
