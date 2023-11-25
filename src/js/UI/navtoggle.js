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

  if (accessToken) {
    const profileLi = document.createElement("li");
    profileLi.className = "nav-item";

    const profileAnchorTag = document.createElement("a");
    profileAnchorTag.className = "nav-link";
    profileAnchorTag.textContent = "Profile";

    const logoutLi = document.createElement("li");
    logoutLi.className = "nav-item";

    const logoutAnchorTag = document.createElement("a");
    logoutAnchorTag.className = "nav-link";
    logoutAnchorTag.textContent = "Logout";

    const navContainer = document
      .querySelector("navbar-nav ms-auto")
      (navContainer)
      .appendChild(profileLi);
    profileLi.appendChild(profileAnchorTag);
    logoutLi.appendChild(logoutAnchorTag);
  } else {
  }
}
