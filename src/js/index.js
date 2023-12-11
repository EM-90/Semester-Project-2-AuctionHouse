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
import { processListings } from "./UI/processListings.js";
import { displayMultipleItems } from "./UI/displayMultipleItems.js";
import { fetchItem } from "./listeners/itemListener.js";

// Route Initialization Functions

document.addEventListener("DOMContentLoaded", function () {
  checkValidation();
  logoutUser();
  setupRouter();
});

// had a problem with dobble returns of fetchListings(). So i made an if statment that checks if the route is the same so the function dosent execute two times

let lastRoute = null;

export async function initHomePage() {
  console.log("Initializing home page");
  if (lastRoute === "home") return;
  lastRoute = "home";
  displayHomePage();
  try {
    const listingsData = await fetchListings();
    const processedListings = await processListings(listingsData);

    displayMultipleItems(processedListings);
    console.log("display listings");
  } catch (error) {
    console.error("Error initializing home page:", error);
  }

  const searchButton = document.getElementById("searchField");
  if (searchButton) {
    searchButton.addEventListener("change", filterListings);
  }

  setupFormListeners();
}

export function initProfilePage() {
  console.log("Initializing profile page");
  if (lastRoute === "profile") return;
  lastRoute = "profile";
  displayProfilePage();
}

export function addItemPage() {
  console.log("Initializing add item page");
  if (lastRoute === "addItem") return;
  lastRoute = "addItem";
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

export async function initItemPage(itemId) {
  console.log("initPostPage called with itemId:", itemId);
  await fetchItem(itemId);
}
