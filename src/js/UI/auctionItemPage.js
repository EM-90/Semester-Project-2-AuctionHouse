import { createElement } from "../helpers/createElement.js";

//'id', 'imageUrl', 'altText', 'title', 'description', 'auctionStart', 'auctionEnd', 'bids'
// defined in the code, or i can pass these as parameters or get them from an object
export function displayItemDetails(id) {
  // Create the main content container
  const mainContent = document.getElementById("mainContent");
  mainContent.innerHTML = ""; // Clear existing content

  // item details
  const firstRow = createElement("div", "row");
  const itemDetailsCol = createElement("div", "col-md-12");
  const itemDetailsHeading = createElement("h2", null, "Item Details");

  // Create
  const cardDiv = createElement("div", "card interactive", null, {
    "data-item": true,
    "data-item-id": id,
  });
  const image = createElement("img", "card-img-top", null, {
    src: imageUrl,
    alt: altText || "Item Image",
  });
  const cardBody = createElement("div", "card-body");
  const titleEl = createElement("h3", "title", title);
  const cardParagraph = createElement("p", "card-text", description);
  const createDateEl = createElement(
    "p",
    "created-at",
    `Auction start: ${auctionStart}`
  );
  const endDateEl = createElement("p", "ends-at", `Ends at: ${auctionEnd}`);
  const count = createElement("p", "bidding-count", `Bids: ${bids}`);

  cardBody.append(titleEl, createDateEl, endDateEl, count, cardParagraph);
  cardDiv.append(image, cardBody);
  itemDetailsCol.append(itemDetailsHeading, cardDiv);
  firstRow.appendChild(itemDetailsCol);
  mainContent.appendChild(firstRow);

  // second row for auction details
  const secondRow = createElement("div", "row");
  const auctionDetailsCol = createElement("div", "col-md-12");
  const auctionDetailsHeading = createElement("h2", null, "Auction Details");

  const listGroup = createElement("div", "list-group mt-3");

  auctionDetailsCol.appendChild(auctionDetailsHeading);
  auctionDetailsCol.appendChild(listGroup);
  secondRow.appendChild(auctionDetailsCol);

  mainContent.appendChild(secondRow);

  // specifications
  const thirdRow = createElement("div", "row");
  const specificationsCol = createElement("div", "col-12");
  const specificationsHeading = createElement("h2", null, "Specifications");
  specificationsCol.appendChild(specificationsHeading);
  thirdRow.appendChild(specificationsCol);

  // Append the third row to the main content
  mainContent.appendChild(thirdRow);
}
