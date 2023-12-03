import { createListing } from "../api/crud/create.js";
import { fetchListings } from "../api/fetchListings.js";

export function setupAuctionItemFormListener() {
  const form = document.getElementById("addItemForm");
  if (!form) return;

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    const title = formData.get("title");
    const description = formData.get("description");
    const endsAt = formData.get("endsAt");
    const tags = formData
      .get("tags")
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");
    const media = formData.get("media");

    console.log("Title:", title);
    console.log("EndsAt:", endsAt);

    const newListingData = {
      title,
      description,
      endsAt,
      tags,
      media: media ? [media] : [],
    };

    try {
      const result = await createListing(newListingData);
      if (result) {
        await fetchListings();
      }
      // Handle the result
    } catch (error) {
      console.error("Error creating listing:", error);
    }
  });
}
