import { initHomePage, initProfilePage, addItemPage } from "../index.js";

export const routes = {
  "/": initHomePage,
  "/profile": initProfilePage,
  "/add-item": addItemPage,
};

export function router() {
  const hash = window.location.hash || "#";
  const path = hash ? hash.substring(1) : "/";

  const route = routes[path] || routes["/"];

  route();
}

export function setupRouter() {
  window.addEventListener("popstate", router);

  document.addEventListener("click", (event) => {
    if (event.target.matches("[data-link]")) {
      event.preventDefault();
      const newHash = event.target.getAttribute("href");
      window.location.hash = newHash;
    } else if (event.target.matches("[data-post]")) {
      // Handle clicks on the items on the main page
      event.preventDefault();
      const postId = event.target.getAttribute("data-post-id");
      window.location.hash = `/post/${postId}`;
    }
  });
  router();
}
