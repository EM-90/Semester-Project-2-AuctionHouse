import { fetchListings } from "../api/fetchListings.js";
import { load } from "../storage/index.js";

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

  const profileName = document.createElement("h4");
  profileName.className = "profile-name";
  profileName.textContent = `${profileData.name}`;

  mainContentContainer.appendChild(profileName);

  const totalCredits = document.createElement("p");
  totalCredits.className = "credit-display";
  totalCredits.id = "creditsDisplay";
  totalCredits.textContent = `Your total credit:${profileData.credits}`;

  mainContentContainer.appendChild(totalCredits);

  //dont know where to append this yet

  // This will be the auction list display

  const myAuctionList = document.createElement("ul");
  myAuctionList.className = "list-group";

  try {
    const allListings = await fetchListings();
    console.log("fetched listings:", allListings);
    const currentUserID = load("id");
    const userAuctionItems = allListings.filter(
      (listing) => listing.createdBy === currentUserID
    );

    userAuctionItems.forEach((item) => {
      const myAuctionItem = document.createElement("li");
      myAuctionItem.className =
        "list-group-item d-flex justify-content-between align-items-start";

      const itemContentContainer = document.createElement("div");
      itemContentContainer.className = "ms-2 me-auto";
      itemContentContainer.textContent = item.title;
      myAuctionItem.appendChild(itemContentContainer);
      myAuctionList.appendChild(myAuctionItem);
    });
  } catch (error) {
    console.error("Error fetching listings", error);
  }
  mainContentContainer.appendChild(myAuctionList);
}
