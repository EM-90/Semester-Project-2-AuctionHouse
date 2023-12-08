import { registrationUrl } from "../urls/all-urls.js";

export async function sendRegisterInfo(profile) {
  try {
    const response = await fetch(registrationUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(profile),
    });

    if (!response.ok) {
      throw Error("Could not send post request");
    } else {
      response.ok;

      const responseData = await response.json();

      if (responseData && responseData.id) {
        storage.save("userID", responseData.id);
      }

      const registerModal =
        bootstrap.Modal.getOrCreateInstance("#registerModal");
      registerModal.hide();

      return responseData;
    }
  } catch (error) {
    console.log("Problem with fetch operation", error.message);
  }
}
