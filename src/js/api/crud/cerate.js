import { load } from "../../storage/index.js";

async function createListing(newListingData) {
  try {
    const token = storage.load("token");
    const response = await fetch("/api/listings", {
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
