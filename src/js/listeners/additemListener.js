import { displayAuctionItem } from "../UI/displayAddItems.js";
import { setupAuctionItemFormListener } from "./addItemFormListener.js";

export function addItemListener() {
  document.body.addEventListener("click", function (event) {
    if (event.target && event.target.id === "addItemId") {
      displayAuctionItem();
      setupAuctionItemFormListener();
    }
  });
}
