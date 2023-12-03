import { listingsUrl } from "../../api/urls/all-urls.js";
import { displayListings } from "../../UI/displayListings.js";

export async function filterListings() {
  const searchInput = document.getElementById("searchField").value;
  const active = true;

  let queryParams = `?_active=${active}`;
  if (searchInput) {
    queryParams += `&_tag=${encodeURIComponent(searchInput)}`;
  }

  await fetchListings(queryParams);
}

async function fetchListings(queryParams = "") {
  try {
    const response = await fetch(`${listingsUrl}${queryParams}`);
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
    console.error("Error fetching listings:", error);
  }
}
