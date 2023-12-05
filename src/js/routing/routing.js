import { initHomePage, initProfilePage, addItemPage } from "../index.js";

export const routes = {
  "/": initHomePage,
  "/profile": initProfilePage,
  "/add-item": addItemPage,
};

export function router() {
  const path = window.location.pathname;
  const route = routes[path] || routes["/"];
  route();
}

export function setupRouter() {
  window.addEventListener("popstate", router);

  document.addEventListener("click", (event) => {
    if (event.target.matches("[data-link]")) {
      event.preventDefault();
      history.pushState(null, null, event.target.href);
      router();
    }
  });
}
