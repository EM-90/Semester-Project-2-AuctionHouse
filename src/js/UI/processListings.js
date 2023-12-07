// processListings.js
import { fetchListings } from "../api/fetchListings.js";

export async function processListings() {
  try {
    const apiResults = await fetchListings();
    return apiResults.map((listing) => {
      const defaultImage = "/public/images/image-987-svgrepo-com.png";
      const imageUrl =
        listing.media && listing.media.length > 0
          ? listing.media[0]
          : defaultImage;
      return {
        title: listing.title,
        imageUrl,
        description: listing.description,
        auctionStart: listing.created,
        auctionEnd: listing.endsAt,
        bids: listing._count ? listing._count.bids : 0,
        id: listing.id,
      };
    });
  } catch (error) {
    console.error("Error processing listings:", error);
    return [];
  }
}
