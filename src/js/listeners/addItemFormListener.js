import { createListing } from "../api/crud/create.js";

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
      tags: formData.get("tags"),
      media: formData.get("media"),
    };
    console.log(titleInput.value);
    const result = await createListing(newListingData);
  });
}
