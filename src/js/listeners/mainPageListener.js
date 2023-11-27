import { displayMainPage } from "../UI/displayMainPage.js";
import { fetchListings } from "../api/fetchListings.js";

export function mainPageListener() {
  document.body.addEventListener("click", function (event) {
    if (event.target && event.target.id === "mainPageLink") {
      displayMainPage();
      fetchListings();
    }
  });
}
