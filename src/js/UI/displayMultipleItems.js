import { displayitem } from "./displayItem.js";

export function displayMultipleItems(listings) {
  const bootstrapRow = document.getElementById("bootstrapRow");
  if (!bootstrapRow) {
    console.error("bootstrapRow not found");
    return;
  }
  bootstrapRow.innerHTML = "";

  listings.forEach((listing) => {
    displayitem(listing);
  });
}
