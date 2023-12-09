import { fetchUserListings } from "../api/crud/read.js";
import { load } from "../storage/index.js";
import { updateProfileAvatar } from "../api/crud/update.js";

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

export async function displayProfilePage() {
  const mainContentContainer = document.getElementById("mainContent");

  mainContentContainer.innerHTML = "";

  const profileImage = document.createElement("img");
  profileImage.className = "profile-image";
  profileImage.style.backgroundColor = "lightgray";

  const profileData = load("profile");

  if (profileData && profileData.avatar) {
    profileImage.src = profileData.avatar;
  } else {
    profileImage.src = "../../public/images/image-987-svgrepo-com.png";
  }

  mainContentContainer.appendChild(profileImage);

  const profileName = document.createElement("h2");
  profileName.className = "profile-name";
  profileName.textContent = `${profileData.name}`;

  const editIcon = document.createElement("i");
  editIcon.className = "bi bi-pencil-square ms-3";
  editIcon.id = "editProfile";
  profileName.appendChild(editIcon);

  const editProfileModal = new bootstrap.Modal(
    document.getElementById("editProfileModal")
  );

  editIcon.addEventListener("click", function () {
    editProfileModal.show();
  });

  updateProfileAvatar();

  mainContentContainer.appendChild(profileName);

  const totalCredits = document.createElement("p");
  totalCredits.className = "credit-display";
  totalCredits.id = "creditsDisplay";
  totalCredits.textContent = `Your total credit:${profileData.credits}`;

  mainContentContainer.appendChild(totalCredits);

  //dont know where to append this yet

  // This will be the auction list display

  const myAuctionList = document.createElement("ul");
  myAuctionList.className = "list-group mt-5";

  try {
    // Fetch the user's listings using the username
    const userAuctionItems = await fetchUserListings(profileData.name);

    if (userAuctionItems && userAuctionItems.length > 0) {
      userAuctionItems.forEach((item) => {
        const myAuctionItem = document.createElement("li");
        myAuctionItem.className =
          "list-group-item d-flex justify-content-between align-items-start";

        const itemContentContainer = document.createElement("div");
        itemContentContainer.className = "ms-2 me-auto";

        const headingItem = document.createElement("div");
        headingItem.className = "fw-bold";
        headingItem.textContent = item.title;
        itemContentContainer.appendChild(headingItem);

        const descriptionText = document.createTextNode(
          `Description ${item.description}`
        );
        itemContentContainer.appendChild(descriptionText);

        const bidsBadge = document.createElement("span");
        bidsBadge.className = "badge bg-primary rounded-pill";
        bidsBadge.textContent = item._count ? item._count.bids : 0;
        myAuctionItem.appendChild(itemContentContainer);
        myAuctionItem.appendChild(bidsBadge);

        myAuctionItem.appendChild(itemContentContainer);
        myAuctionList.appendChild(myAuctionItem);
      });
    } else {
      console.error("Error fetching user's listings");
    }
  } catch (error) {
    console.error("Error fetching listings", error);
  }

  mainContentContainer.appendChild(myAuctionList);
}
