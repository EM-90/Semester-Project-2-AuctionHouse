import { fetchFromApi } from "../api/crud/read.js";
import { baseUrl } from "../api/urls/all-urls.js";
import { displayItemDetails } from "../UI/auctionItemPage.js";

export function ItemListener() {
  const cards = document.querySelectorAll("[data-item]");

  cards.forEach((cardDiv) => {
    cardDiv.addEventListener("click", function () {
      const itemId = this.getAttribute("data-item-id");
      console.log("Card clicked, itemId:", itemId);
      window.location.hash = `/item-page/${itemId}`;
    });
  });
}

export async function fetchItem(id) {
  const url = `${baseUrl}/listings/${id}`;
  try {
    const itemDetails = await fetchFromApi(url);
    console.log("Items fetched:", itemDetails);
    displayItemDetails(itemDetails);
  } catch (error) {
    console.error("Error fetching items:", error);
  }
}
