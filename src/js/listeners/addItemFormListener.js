import { createListing } from "../api/crud/cerate.js";

export function setupAuctionItemFormListener() {
  const form = document.getElementById("addItemForm");
  if (!form) return;

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const newListingData = {
      title: formData.get("title"),
      description: formData.get("description"),
      endsAt: formData.get("endsAt"),
      tags: formData.get("tags").split(","),
      media: formData.get("media"),
    };

    const result = await createListing(newListingData);
    console.log("listing creation", result);
  });
}
