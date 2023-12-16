// processListings.js
export async function processListings(listings) {
  const processSingleListing = (listing) => {
    if (!Array.isArray(listing.media) || listing.media.length === 0) {
      return null;
    }

    const imageUrl = listing.media[0];

    return {
      title: listing.title,
      imageUrl,
      description: listing.description,
      auctionStart: listing.created,
      auctionEnd: listing.endsAt,
      bids: listing._count ? listing._count.bids : 0,
      id: listing.id,
      tags: listing.tags,
    };
  };

  try {
    return Array.isArray(listings)
      ? listings.map(processSingleListing).filter((listing) => listing !== null)
      : processSingleListing(listings);
  } catch (error) {
    console.error("Error processing listings:", error);
    return [];
  }
}
