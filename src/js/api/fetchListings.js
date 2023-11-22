export async function fetchListings() {
  try {
    const response = await fetch(
      "https://api.noroff.dev/api/v1/auction/listings"
    );
    const apiResults = await response.json();

    apiResults.forEach((listing) => {
      console.log(listing.id);
    });
    return listing;
  } catch {
    console.log("Error");
  }
}

fetchListings();
