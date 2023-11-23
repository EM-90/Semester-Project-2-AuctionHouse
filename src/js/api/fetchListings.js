import { displayListings } from "../UI/displayListings.js";

export async function fetchListings() {
  try {
    const response = await fetch(
      "https://api.noroff.dev/api/v1/auction/listings"
    );
    const apiResults = await response.json();

    if (response.ok) {
      apiResults.forEach((listing) => {
        console.log(listing);
        const defaultImage = "images/image-987-svgrepo-com.png";
        const imageUrl =
          listing.media && listing.media.length > 0
            ? listing.media[0]
            : defaultImage;

        displayListings(
          listing.title,
          imageUrl,
          listing.title,
          listing.created,
          listing.endsAt,
          listing.description,
          listing._count
        );
      });
    }
  } catch (error) {
    console.log("Error", error);
  }
}

fetchListings();
