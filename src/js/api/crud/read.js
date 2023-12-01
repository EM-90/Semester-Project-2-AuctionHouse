import { load } from "../../storage.index.js";

async function fetchPost() {
  try {
    const token = storage.load("token");
    const response = await fetch("/api/listings", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.error("Error fetching listings:", error);
  }
}
