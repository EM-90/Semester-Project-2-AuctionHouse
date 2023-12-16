import { fetchFromApi } from "../api/crud/read.js";
import { baseUrl } from "../api/urls/all-urls.js";
import { displayItemDetails } from "../UI/auctionItemPage.js";
import { IsUserAuthenticated } from "../UI/alerts/AccessDenied.js";
import { accessDeniedMessage } from "../UI/alerts/AccessDenied.js";

export function ItemListener(containerId) {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error("Container not found:", containerId);
    return;
  }

  container.addEventListener("click", function (event) {
    const clickedItem = event.target.closest(
      ".card.interactive.searchable, .list-group-item"
    );

    if (clickedItem) {
      const itemId = clickedItem.getAttribute("data-item-id");

      if (!IsUserAuthenticated()) {
        event.preventDefault();
        accessDeniedMessage();
        return;
      }

      if (itemId) {
        console.log("Item clicked, itemId:", itemId);
        window.location.hash = `/item-page/${itemId}`;
      }
    }
  });
}

export async function fetchItem(id) {
  const url = `${baseUrl}/listings/${id}?_seller=true&_bids=true`;
  try {
    const itemDetails = await fetchFromApi(url);
    console.log("Items fetched:", itemDetails);
    displayItemDetails(itemDetails);
  } catch (error) {
    console.error("Error fetching items:", error);
  }
}
