import { fetchUserListings } from "../api/crud/read.js";
import { load } from "../storage/index.js";
import { updateProfileAvatar } from "../api/crud/update.js";
import { createElement } from "../helpers/createElement.js";
import { ItemListener } from "../listeners/itemListener.js";

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

  const profileData = load("profile");
  const defaultAvatar = "../../public/images/image-987-svgrepo-com.png";
  const avatarUrl =
    profileData && profileData.avatar ? profileData.avatar : defaultAvatar;

  const profileImage = createElement("img", "profile-image", null, {
    src: avatarUrl,
    style: "background-color: lightgray;",
  });

  mainContentContainer.appendChild(profileImage);

  const profileName = createElement("h2", "profile-name", profileData.name);
  const editIcon = createElement("i", "bi bi-pencil-square ms-3", null, {
    id: "editProfile",
  });

  profileName.appendChild(editIcon);

  const editProfileModal = new bootstrap.Modal(
    document.getElementById("editProfileModal")
  );
  editIcon.addEventListener("click", () => editProfileModal.show());

  updateProfileAvatar();
  mainContentContainer.appendChild(profileName);

  const totalCredits = createElement(
    "p",
    "credit-display",
    `Your total credit: ${profileData.credits}`,
    { id: "creditsDisplay" }
  );
  mainContentContainer.appendChild(totalCredits);

  const myAuctionList = createElement("ul", "list-group mt-5");

  try {
    const userAuctionItems = await fetchUserListings(profileData.name);
    if (userAuctionItems && userAuctionItems.length > 0) {
      console.log("Fetched items:", userAuctionItems);
      userAuctionItems.forEach((item) => {
        const defaultImage = "/public/images/image-987-svgrepo-com.png";
        const imageUrl =
          item.media && item.media.length > 0 ? item.media[0] : defaultImage;
        const myAuctionItem = createElement(
          "li",
          "list-group-item d-flex justify-content-between align-items-center",
          null,
          {
            "data-item": true,
            "data-item-id": item.id,
          }
        );

        const itemContentContainer = createElement("div", "ms-2 me-auto");
        const headingItem = createElement("div", "fw-bold", item.title);
        itemContentContainer.appendChild(headingItem);

        const descriptionText = document.createTextNode(
          `Description: ${item.description}`
        );
        const itemImage = createElement("img", "profile-item-image", null, {
          src: imageUrl,
        });

        itemContentContainer.appendChild(descriptionText);

        const bidsCount = item._count ? item._count.bids : 0;
        const bidsBadge = createElement(
          "span",
          "badge bg-primary rounded-pill",
          `${bidsCount} bids`
        );

        myAuctionItem.appendChild(itemContentContainer);
        myAuctionItem.appendChild(itemImage);
        myAuctionItem.appendChild(bidsBadge);
        myAuctionList.appendChild(myAuctionItem);
      });
      console.log(userAuctionItems);
    } else {
      console.error("Error fetching user's listings");
    }
  } catch (error) {
    console.error("Error fetching listings", error);
  }

  mainContentContainer.appendChild(myAuctionList);
}
