import { fetchListings } from "./api/fetchListings.js";
import { loginlistener } from "./listeners/loginListener.js";
import { registerListener } from "./listeners/registerListener.js";

// Fetching all auction items

fetchListings();

const registerForm = document.querySelector("#registerForm");
if (registerForm) {
  registerListener();
}

const loginForm = document.querySelector("#loginForm");
if (loginForm) {
  loginlistener();
}
