import { loginSuccess } from "../UI/displayMessages.js";
import { checkValidation } from "../UI/navtoggle.js";
import { loginUser } from "../api/auth/login.js";

export function loginlistener() {
  const loginForm = document.querySelector("#loginForm");

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.target;
    const formdata = new FormData(form);
    const profile = Object.fromEntries(formdata.entries());

    try {
      const response = await loginUser(profile);
      if (response.ok) {
        checkValidation();
        const loginmModal = bootstrap.Modal.getOrCreateInstance("#loginModal");
        loginmModal.hide();
        loginSuccess();
        console.log(response);
      }
    } catch (error) {
      console.log("something happend");
    }
  });
}
