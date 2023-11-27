import { checkValidation } from "./UI/navtoggle.js";
import { fetchListings } from "./api/fetchListings.js";
import { loginlistener } from "./listeners/loginListener.js";
import { logoutUser } from "./listeners/logoutListener.js";
import { registerListener } from "./listeners/registerListener.js";
import { profileListener } from "./listeners/profileListener.js";
import { displayMainPage } from "./UI/displayMainPage.js";
import { mainPageListener } from "./listeners/mainPageListener.js";

document.addEventListener("DOMContentLoaded", function () {
  checkValidation();
  displayMainPage();
  logoutUser();
  profileListener();
  mainPageListener();
});

fetchListings();

const registerForm = document.querySelector("#registerForm");
if (registerForm) {
  registerListener();
}

const loginForm = document.querySelector("#loginForm");
if (loginForm) {
  loginlistener();
}
