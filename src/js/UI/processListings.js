// processListings.js

export async function processListings(listings) {
  const processSingleListing = (listing) => {
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
  };

  try {
    if (Array.isArray(listings)) {
      return listings.map(processSingleListing);
    } else {
      return processSingleListing(listings);
    }
  } catch (error) {
    console.error("Error processing listings:", error);
    return [];
  }
}
