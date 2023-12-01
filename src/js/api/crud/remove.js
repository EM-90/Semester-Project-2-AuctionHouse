import { load } from "../../storage/index.js";

async function deleteListing(listingId) {
  try {
    const token = storage.load("token");
    const response = await fetch(`/api/listings/${listingId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.error("Error deleting listing:", error);
  }
}
