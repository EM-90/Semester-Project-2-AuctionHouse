import { displayListings } from "../UI/displayListings.js";
import { listingsUrl } from "./urls/all-urls.js";

export async function fetchListings() {
  try {
    const response = await fetch(listingsUrl);
    const apiResults = await response.json();

    if (response.ok) {
      const bootstrapRow = document.getElementById("bootstrapRow");
      bootstrapRow.innerHTML = "";

      apiResults.forEach((listing) => {
        const defaultImage = "images/image-987-svgrepo-com.png";
        const imageUrl =
          listing.media && listing.media.length > 0
            ? listing.media[0]
            : defaultImage;
        const listingObj = {
          title: listing.title,
          imageUrl,
          altText: listing.title,
          auctionStart: listing.created,
          auctionEnd: listing.endsAt,
          description: listing.description,
          bids: listing._count,
        };

        displayListings(listingObj);
      });
    }
  } catch (error) {
    console.log("Error", error);
  }
}
