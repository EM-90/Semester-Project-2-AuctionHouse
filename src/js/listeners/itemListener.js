import { fetchFromApi } from "../api/crud/read.js";
import { displayItem } from "../UI/displayItem.js";
import { baseUrl } from "../api/urls/all-urls.js";

export function ItemListener() {
  const cards = document.querySelectorAll("[data-item]");

  cards.forEach((cardDiv) => {
    cardDiv.addEventListener("click", function () {
      console.log("Card clicked, itemId:", itemId);
      const itemId = this.getAttribute("data-item-id");

      window.location.hash = `/item-page/${itemId}`;
    });
  });
}

export async function fetchItem(itemId) {
  try {
    const items = await fetchFromApi(`${baseUrl}/listener/${itemId}`);
    console.log("Items fetched:", items);
    items.forEach((item) => {
      displayItem(item);
    });
    ItemListener();
  } catch (error) {
    console.error("Error fetching items:", error);
  }
}
