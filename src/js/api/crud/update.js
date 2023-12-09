import { load } from "../../storage/index.js";
import { baseUrl } from "../urls/all-urls.js";

export async function update(url, updatedData) {
  try {
    const token = load("token");
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedData),
    });
    return await response.json();
  } catch (error) {
    console.error("Error updating listing:", error);
  }
}

export function updateProfileAvatar() {
  const editForm = document.getElementById("editForm");

  editForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(editForm);
    let profileAvatarUrl = formData.get("avatar");
    const profileData = load("token");

    const updatedData = { avatar: profileAvatarUrl };

    const response = await update(
      `${baseUrl}/profiles/${profileData.name}/media`,
      updatedData
    );
    return response;
  });
}
