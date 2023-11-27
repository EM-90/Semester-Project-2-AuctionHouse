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
    const allAuctionsLi = document.createElement("li");
    allAuctionsLi.className = "nav-item";

    const allAuctionsAnchorTag = document.createElement("a");
    allAuctionsAnchorTag.className = "nav-link";
    allAuctionsAnchorTag.id = "mainPageLink";
    allAuctionsAnchorTag.textContent = "All auctions";
    allAuctionsAnchorTag.href = "#";

    allAuctionsLi.appendChild(allAuctionsAnchorTag);

    //Profile list item and anchor tag
    const profileLi = document.createElement("li");
    profileLi.className = "nav-item";

    const profileAnchorTag = document.createElement("a");
    profileAnchorTag.className = "nav-link";
    profileAnchorTag.id = "profileLink";
    profileAnchorTag.textContent = "Profile";
    profileAnchorTag.href = "#";

    profileLi.appendChild(profileAnchorTag);
    //Logout list item and anchor tag
    const logoutLi = document.createElement("li");
    logoutLi.className = "nav-item";

    const logoutAnchorTag = document.createElement("a");
    logoutAnchorTag.className = "nav-link";
    logoutAnchorTag.id = "logout";
    logoutAnchorTag.textContent = "Logout";
    logoutAnchorTag.href = "#";

    logoutLi.appendChild(logoutAnchorTag);

    navContainer.appendChild(profileLi);
    navContainer.appendChild(logoutLi);
    navContainer.appendChild(allAuctionsLi);
  } else {
    // Login list items and anchor tag
    const loginLi = document.createElement("li");
    loginLi.className = "nav-item";
    loginLi.setAttribute("data-bs-toggle", "modal");
    loginLi.setAttribute("data-bs-target", "#loginModal");

    const loginAnchor = document.createElement("a");
    loginAnchor.className = "nav-link";
    loginAnchor.href = "#";
    loginAnchor.textContent = "Login";
    loginLi.appendChild(loginAnchor);

    // Register list items and anchor tag
    const registerLi = document.createElement("li");
    registerLi.className = "nav-item";
    registerLi.setAttribute("data-bs-toggle", "modal");
    registerLi.setAttribute("data-bs-target", "#registerModal");

    const registerAnchor = document.createElement("a");
    registerAnchor.className = "nav-link";
    registerAnchor.href = "#";
    registerAnchor.textContent = "Register";
    registerLi.appendChild(registerAnchor);

    navContainer.appendChild(loginLi);
    navContainer.appendChild(registerLi);
  }
}
