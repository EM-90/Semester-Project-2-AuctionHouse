import { sendRegisterInfo } from "../api/auth/register.js";

export function registerListener() {
  const regform = document.querySelector("#registerForm");

  regform.addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());

    try {
      const response = await sendRegisterInfo(profile);
      console.log("Respons from server:", response);
    } catch (error) {
      console.log(
        "Something unecspected happend while awaiting response",
        error.message
      );
    }
  });
}
