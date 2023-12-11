import {
  initHomePage,
  initProfilePage,
  addItemPage,
  initItemPage,
} from "../index.js";

export function router() {
  const hash = window.location.hash || "#";
  console.log("Not hardcoded hash", hash);

  // Adjusted extraction logic
  const basePath = hash.substring(2).split("/")[0];
  console.log("Base path from actual hash:", basePath);

  switch (basePath) {
    case "profile":
      console.log("Should initialize profile page");
      initProfilePage();
      break;
    case "add-item":
      console.log("Should initialize add page");
      addItemPage();
      break;
    case "item-page":
      const itemId = hash.substring(2).split("/")[1];
      console.log("Should initialize item page");
      initItemPage(itemId);
      break;
    default:
      console.log("Should initialize home page");
      initHomePage();
  }
}

export function setupRouter() {
  window.addEventListener("hashchange", router);

  document.addEventListener("click", (event) => {
    if (event.target.matches("[data-link]")) {
      event.preventDefault();
      const newHash = event.target.getAttribute("href");
      console.log("Setting hash to:", newHash);
      window.location.hash = newHash;
    }
  });
  router(); // Call the router initially to handle the current URL
}
