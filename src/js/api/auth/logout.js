import { remove } from "../../storage/index.js";

export function logoutUser() {
  const logoutButton = document.querySelector("#logoutButton");

  logoutButton.addEventListener("click", () => {
    remove("token");
    remove("profile");

    const userMail = document.querySelector("#loginEmail");
    const userPassword = document.querySelector("#loginPassword");

    if (userMail && userPassword) {
      userMail.value = "";
      userPassword.value = "";
    }
  });
}
