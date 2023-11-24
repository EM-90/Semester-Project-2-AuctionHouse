import { loginUser } from "../api/auth/login.js";

export function loginlistener() {
  const loginForm = document.querjySelector("#loginForm");

  loginForm.addEventlistener("submit", async (event) => {
    event.preventDefault();

    const form = event.target;
    const formdata = new FormData(form);
    const profile = Object.entries(formdata.entries());

    try {
      const response = await loginUser(profile);
      if (response.ok) {
        const loginmModal = bootstrap.Modal.getOrCreateInstance("#loginModal");
        loginmModal.hide();
      }
    } catch (error) {
      console.log("something happend");
    }
  });
}
