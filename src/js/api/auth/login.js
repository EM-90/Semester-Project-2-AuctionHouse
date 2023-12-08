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
      const responseData = await response.json();
      const { accessToken, ...userDetails } = responseData;

      storage.save("token", accessToken);
      storage.save("profile", userDetails);

      return { ok: response.ok, accessToken, userDetails };
    } else {
      console.log("email or password is wrong");
    }
  } catch (error) {
    console.log("Post request failed:", error.message);
  }
}
