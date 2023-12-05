/* This is the Html i want to base my toggle function on 

<li class="nav-item">
<a class="nav-link" href="#">Profile</a>
</li>

<li class="nav-item">
<a class="nav-link" href="#">Your items</a>
</li>

<li class="nav-item">
<a class="nav-link" href="#">Logout</a>
</li>

<li class="nav-item" data-bs-toggle="modal" data-bs-target="#loginModal">
<a class="nav-link" href="#">Login</a>
</li>

<li class="nav-item" data-bs-toggle="modal" data-bs-target="#registerModal">
<a class="nav-link" href="#">Register</a>
</li>*/

export function checkValidation() {
  const accessToken = localStorage.getItem("token");
  const navContainer = document.querySelector(".navbar-nav.ms-auto");

  navContainer.innerHTML = "";

  if (accessToken) {
    const allAuctionsLi = createNavLink("All auctions", "/", "mainPageLink");

    const profileLi = createNavLink("Profile", "/profile", "profileLink");

    const addItemLi = createNavLink("Add item", "/add-item", "addItemId");

    const logoutLi = createNavLink("Logout", "#", "logout");

    navContainer.append(allAuctionsLi, profileLi, addItemLi, logoutLi);
  } else {
    const loginLi = createNavLink("Login", "#", "login", true);

    const registerLi = createNavLink("Register", "#", "register", true);

    navContainer.append(loginLi, registerLi);
  }
}

function createNavLink(text, href, id, isModalLink = false) {
  const li = document.createElement("li");
  li.className = "nav-item";

  const a = document.createElement("a");
  a.className = "nav-link";
  a.id = id;
  a.textContent = text;

  if (!isModalLink) {
    a.href = href;
    a.setAttribute("data-link", "");
  } else {
    a.href = "#";
    li.setAttribute("data-bs-toggle", "modal");
    li.setAttribute("data-bs-target", `#${id}Modal`);
  }

  li.appendChild(a);
  return li;
}
