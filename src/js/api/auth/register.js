import { registrationUrl } from "../urls/all-urls.js";

export async function sendRegisterInfo(profil) {
  try {
    const response = await fetch(registrationUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(profil),
    });

    if (!response.ok) {
      throw Error("Could not send post request");
    } else {
      response.ok;

      const registerModal =
        bootstrap.Modal.getOrCreateInstance("#registerModal");
      registerModal.hide();
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log("Problem with fetch operation", error.message);
  }
}
