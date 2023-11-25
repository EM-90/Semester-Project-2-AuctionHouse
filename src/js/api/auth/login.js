import { loginUrl } from "../urls/all-urls.js";
import * as storage from "../../storage/index.js";

export async function loginUser(profile) {
  try {
    const response = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(profile),
    });

    if (response.ok) {
      const { accessToken, ...userDetails } = await response.json();

      storage.save("token", accessToken);
      storage.save("profile", userDetails);
      console.log(profile);

      return { ok: response.ok, accessToken, userDetails };
    } else {
      console.log("email or password is wrong");
    }
  } catch (error) {
    console.log("Post request failed:", error.message);
  }
}
