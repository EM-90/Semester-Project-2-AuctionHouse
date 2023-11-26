// Container in the html where everything is going to append <div class="container mt-5 pt-5 main-page">

/*<ul class="list-group">
    <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
        <div class="fw-bold">Subheading</div>
        Content for list item
        </div>
        <span class="badge bg-primary rounded-pill">14</span>
    </li>
  </ul>*/

export function displayProfilePage() {
  const profileContainer = document.querySelector(
    ".container.mt-5.pt-5.main-page"
  );

  const profileImage = document.createElement("img");
  profileImage.className = "profile-image";

  const profileData = load("profile");

  if (profileData && profileData.avatar) {
    profileImage.src = profileData.avatar;
  } else {
    profileImage.src = "../../public/images/image-987-svgrepo-com.png";
  }

  profileContainer.appendChild(profileImage);

  const totalCredits = document.createElement("p");
  totalCredits.className = "credit-display";

  //dont know where to append this yet

  const myAuctionList = document.createElement("ul");
  myAuctionList.className = "list-group";

  const myAuctionItem = document.createElement("li");
  myAuctionItem.className =
    "list-group-item d-flex justify-content-between align-items-start";

  myAuctionItem.appendChild("myAuctionList");

  myAuctionItem.forEach();
}
