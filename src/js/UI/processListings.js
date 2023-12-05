import { displayListings } from "../UI/displayListings.js";

export async function processListings(apiResults) {
  try {
    const bootstrapRow = document.getElementById("bootstrapRow");
    if (!bootstrapRow) {
      console.error("bootstrapRow not found");
      return;
    }
    bootstrapRow.innerHTML = "";

    apiResults.forEach((listing) => {
      const defaultImage = "/public/images/image-987-svgrepo-com.png";
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
  } catch (error) {
    console.log("Error", error);
  }
}
