import { countdown } from "../helpers/countDownAuctionTime.js";
import { createElement } from "../helpers/createElement.js";
import { sortItemByHighestAmount } from "../helpers/sorting.js";

export function displayItemDetails(itemDetails) {
  // Create the main content container
  const mainContent = document.getElementById("mainContent");
  mainContent.innerHTML = "";

  // item details
  const firstRow = createElement("div", "row");
  const itemDetailsCol = createElement("div", "col-md-6");
  const itemDetailsHeading = createElement("h2", null, "Item Details");

  // Card
  const cardDiv = createElement("div", "card-specific", null, {
    "data-item": true,
    "data-item-id": itemDetails.id,
  });
  const imageGallery = createElement("div", "image-gallery");
  const thumbnailsContainer = createElement("div", "thumbnails-container");
  let mainImageElement;

  if (itemDetails.media && itemDetails.media.length > 0) {
    mainImageElement = createElement("img", "main-image", null, {
      src: itemDetails.media[0],
      alt: itemDetails.title,
    });
    imageGallery.appendChild(mainImageElement);
    itemDetails.media.forEach((url) => {
      const img = createElement("img", "thumbnail-image", null, {
        src: url,
        alt: itemDetails.title,
      });
      img.onclick = () => setMainImage(img.src); // Set main image on click
      thumbnailsContainer.appendChild(img);
    });
  } else {
    // Default image if no images are present
    const defaultImage = "/public/images/image-987-svgrepo-com.png";
    mainImageElement = createElement("img", "main-image", null, {
      src: defaultImage,
      alt: "Default Image",
    });

    imageGallery.appendChild(mainImageElement);
  }

  imageGallery.appendChild(thumbnailsContainer);

  function setMainImage(src) {
    mainImageElement.src = src;
  }

  const cardBody = createElement("div", "card-body");
  const titleEl = createElement("h3", "title", itemDetails.title);
  const cardParagraph = createElement(
    "p",
    "card-text",
    itemDetails.description
  );
  const createDateEl = createElement(
    "p",
    "created-at",
    `Auction start: ${itemDetails.created}`
  );
  const endDateEl = createElement("p", "ends-at", "Auction ends in: ");
  const countdownEl = createElement("span", "countdown-timer");
  const bids = createElement(
    "p",
    "total-bids",
    `Bids: ${itemDetails.bids.length}`
  );

  cardBody.append(titleEl, createDateEl, endDateEl, bids, cardParagraph);
  cardDiv.append(imageGallery, cardBody);
  endDateEl.appendChild(countdownEl);
  itemDetailsCol.append(itemDetailsHeading, cardDiv);
  firstRow.appendChild(itemDetailsCol);
  mainContent.appendChild(firstRow);
  countdown(itemDetails.endsAt, countdownEl);

  // second row for auction details

  const auctionDetailsCol = createElement("div", "col-md-6");
  const auctionDetailsHeading = createElement("h2", null, "Auction Details");

  // The bid section of the page
  const bidForm = createElement("form", "bid-form", null, null, "bidForm");
  const addBidInput = createElement("input", "form-control addBidInput", null, {
    type: "number",
    name: "bid",
    placeholder: "Enter your bid",
  });
  const bidButton = createElement(
    "button",
    "btn btn-success mt-2 bid-button",
    "Place Bid",
    {
      type: "submit",
    },
    "bidButton"
  );

  const listGroup = createElement("div", "list-group mt-3 scroll");

  auctionDetailsCol.appendChild(auctionDetailsHeading);

  bidForm.appendChild(addBidInput);
  bidForm.appendChild(bidButton);
  auctionDetailsCol.appendChild(bidForm);

  const sortedBids = sortItemByHighestAmount(itemDetails.bids);

  sortedBids.forEach((bid, index) => {
    const bidListItem = createElement(
      "div",
      "list-group-item d-flex justify-content-between align-items-center",
      null
    );

    const bidderName = createElement("span", null, `${bid.bidderName}`);

    const biddersAmount = createElement(
      "span",
      "badge bg-light",
      `$${bid.amount}`
    );

    if (index === 0) {
      biddersAmount.classList.add("bg-success");
      bidListItem.classList.add("list-group-item-success");
      biddersAmount.classList.remove("bg-light");
    } else if (index > 0) {
      biddersAmount.classList.add("bg-danger");
      biddersAmount.classList.remove("bg-light");
    }

    bidListItem.appendChild(bidderName);
    bidListItem.appendChild(biddersAmount);
    listGroup.appendChild(bidListItem);
  });

  auctionDetailsCol.appendChild(listGroup);
  firstRow.appendChild(auctionDetailsCol);

  mainContent.appendChild(firstRow);

  // specifications
  const thirdRow = createElement("div", "row");
  const specificationsCol = createElement("div", "col-12");
  const specificationsHeading = createElement("h2", null, "Specifications");
  specificationsCol.appendChild(specificationsHeading);
  thirdRow.appendChild(specificationsCol);

  // Append the third row to the main content
  mainContent.appendChild(thirdRow);
}
