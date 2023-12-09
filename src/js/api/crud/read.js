import { load } from "../../storage/index.js";
import { baseUrl } from "../urls/all-urls.js";

async function fetchFromApi() {
  try {
    const token = load("token");
    const response = await fetch(url, {
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

export async function fetchUserListings(name) {
  try {
    const token = load("token");
    const response = await fetch(`${baseUrl}/profiles/${name}/listings`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch listings");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching user's listings:", error);
  }
}
