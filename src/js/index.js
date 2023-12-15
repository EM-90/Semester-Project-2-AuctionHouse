import { checkValidation } from "./UI/navtoggle.js";
import { fetchListings } from "./api/fetchListings.js";
import { loginlistener } from "./listeners/loginListener.js";
import { logoutUser } from "./listeners/logoutListener.js";
import { registerListener } from "./listeners/registerListener.js";
import { displayHomePage } from "./UI/displayHomePage.js";
import { displayProfilePage } from "./UI/displayProfile.js";
import { displayAuctionItem } from "./UI/displayAddItems.js";
import { setupAuctionItemFormListener } from "./listeners/addItemFormListener.js";
import { setupRouter } from "./routing/routing.js";
import { processListings } from "./UI/processListings.js";
import { displayMultipleItems } from "./UI/displayMultipleItems.js";
import { ItemListener, fetchItem } from "./listeners/itemListener.js";
import { addBidListener } from "./helpers/addBid.js";
import { searchBarFunction } from "./listeners/filters/listFilter.js";

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
    const listingsData = await fetchListings(
      "?sort=created&sortOrder=desc&limit=100&_active=true"
    );
    const processedListings = await processListings(listingsData);

    displayMultipleItems(processedListings);
    searchBarFunction(processedListings);
    ItemListener();
    console.log("display listings");
  } catch (error) {
    console.error("Error initializing home page:", error);
  }

  setupFormListeners();

  /*setInterval(() => {
    window.location.reload();
  }, 120000);*/ // If you want to get the page refreshed every other minute, instead of doing it manualy
}

export async function initProfilePage() {
  console.log("Initializing profile page");
  if (lastRoute === "profile") return;
  lastRoute = "profile";
  await displayProfilePage();
  ItemListener();
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

export async function initItemPage(Id) {
  if (lastRoute === "item-page") return;
  lastRoute = "item-page";
  console.log("initPostPage called with itemId:", Id);
  await fetchItem(Id);
  addBidListener();
}
