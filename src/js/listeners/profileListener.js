import { displayProfilePage } from "../UI/displayProfile.js";

export function profileListener() {
  document.body.addEventListener("click", function (event) {
    if (event.target && event.target.id === "profileLink") {
      displayProfilePage();
      console.log(displayProfilePage);
    }
  });
}
