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

export function displayMainPage() {
  const mainContentContainer = document.getElementById("mainContent");

  mainContentContainer.innerHTML = "";

  const header = document.createElement("h1");
  header.className = "mb-3";
  header.textContent = "All our auctions";
  mainContentContainer.appendChild(header);

  const form = document.createElement("form");
  form.className = "d-flex";
  form.setAttribute("role", "search");

  const input = document.createElement("input");
  input.className = "form-control me-2";
  input.type = "search";
  input.placeholder = "Search";
  input.setAttribute("aria-label", "Search");
  form.appendChild(input);

  const searchButton = document.createElement("button");
  searchButton.className = "btn btn-outline-success";
  searchButton.type = "submit";
  searchButton.textContent = "Search";
  form.appendChild(searchButton);

  const addButton = (iconClass) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "btn btn-light ms-2";

    const icon = document.createElement("i");
    icon.className = iconClass;
    button.appendChild(icon);

    form.appendChild(button);
  };

  addButton("bi bi-sort-alpha-down");
  addButton("bi bi-sort-alpha-up");

  mainContentContainer.appendChild(form);

  //const rowDiv = document.createElement("div");
  //rowDiv.id = "bootstrap-row";
  //rowDiv.className = "row";
  //mainContentContainer.appendChild(rowDiv);
}
