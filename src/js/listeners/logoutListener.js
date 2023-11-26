import { checkValidation } from "../UI/navtoggle.js";
import { remove } from "../storage/index.js";

export function logoutUser() {
  document.body.addEventListener("click", function (event) {
    if (event.target && event.target.id === "logout") {
      remove("token");
      remove("profile");

      const userMail = document.querySelector("#loginEmail");
      const userPassword = document.querySelector("#loginPassword");

      if (userMail && userPassword) {
        userMail.value = "";
        userPassword.value = "";
      }

      checkValidation();
    }
  });
}
