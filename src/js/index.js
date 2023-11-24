import { fetchListings } from "./api/fetchListings.js";
import { registerListener } from "./listeners/registerListener.js";

// Fetching all auction items
fetchListings();

const registerForm = document.querySelector("#registerForm");
if (registerForm) {
  registerListener();
}
