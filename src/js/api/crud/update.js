import { load } from "../../storage/index.js";

async function updateListing(listingId, updatedData) {
  try {
    const token = storage.load("token");
    const response = await fetch(`/api/listings/${listingId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedData),
    });
    return await response.json();
  } catch (error) {
    console.error("Error updating listing:", error);
  }
}
