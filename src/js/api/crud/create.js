import * as storage from "../../storage/index.js";
import { listingsUrl } from "../urls/all-urls.js";

export async function createListing(newListingData) {
  try {
    const token = storage.load("token");
    const response = await fetch(listingsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newListingData),
    });
    return await response.json();
  } catch (error) {
    console.error("Error creating listing:", error);
  }
}
