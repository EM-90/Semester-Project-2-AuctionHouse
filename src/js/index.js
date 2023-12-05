import { checkValidation } from "./UI/navtoggle.js";
import { fetchListings } from "./api/fetchListings.js";
import { loginlistener } from "./listeners/loginListener.js";
import { logoutUser } from "./listeners/logoutListener.js";
import { registerListener } from "./listeners/registerListener.js";
import { displayHomePage } from "./UI/displayHomePage.js";
import { filterListings } from "./listeners/filters/listFilter.js";
import { displayProfilePage } from "./UI/displayProfile.js";
import { displayAuctionItem } from "./UI/displayAddItems.js";
import { setupAuctionItemFormListener } from "./listeners/addItemFormListener.js";
import { setupRouter } from "./routing/routing.js";

// Route Initialization Functions

document.addEventListener("DOMContentLoaded", function () {
  checkValidation();
  logoutUser();
  setupRouter();
  fetchListings();
});

export function initHomePage() {
  displayHomePage();
  fetchListings();
  const searchButton = document.getElementById("searchField");
  if (searchButton) {
    searchButton.addEventListener("change", filterListings);
  }

  setupFormListeners();
}

export function initProfilePage() {
  displayProfilePage();
}

export function addItemPage() {
  displayAuctionItem();
  setupAuctionItemFormListener();
}

function setupFormListeners() {
  const registerForm = document.querySelector("#registerForm");
  if (registerForm) {
    registerListener();
  }

  const loginForm = document.querySelector("#loginForm");
  if (loginForm) {
    loginlistener();
  }
}
