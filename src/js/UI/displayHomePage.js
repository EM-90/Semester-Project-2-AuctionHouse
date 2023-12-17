import { createElement } from "../helpers/createElement.js";
// The dynamic html made here is based of the html commented out here :)

/*<h1 class="mb-3">All our auctions</h1>
<form class="d-flex" role="search">
  <input
    class="form-control me-2"
    type="search"
    placeholder="Search"
    aria-label="Search"
  />
  <button class="btn btn-outline-success" type="submit">Search</button>
  <button type="button" class="btn btn-light ms-2">
    <i class="bi bi-sort-alpha-down"></i>
  </button>
  <button type="button" class="btn btn-light ms-2">
    <i class="bi bi-sort-alpha-up"></i>
  </button>
</form>
<div id="bootstrap-row" class="row"></div>
</div>*/

export function displayHomePage() {
  const mainContentContainer = document.getElementById("mainContent");
  mainContentContainer.innerHTML = "";

  const header = createElement("h1", "mb-3", "All our auctions");
  mainContentContainer.appendChild(header);

  const form = createElement("form", "d-flex", null, { role: "search" });
  const input = createElement("input", "form-control me-2", null, {
    id: "searchField",
    type: "search",
    placeholder: "Search",
    "aria-label": "Search",
  });
  form.appendChild(input);

  const button = createElement(
    "button",
    "btn btn-light ms-2 lastChanceBtn",
    "Last chance",
    {
      type: "button",
    }
  );

  form.appendChild(button);

  mainContentContainer.appendChild(form);

  let bootstrapRow = document.getElementById("bootstrapRow");
  if (!bootstrapRow) {
    bootstrapRow = createElement("div", "row", null, { id: "bootstrapRow" });
    mainContentContainer.appendChild(bootstrapRow);
  }
}
