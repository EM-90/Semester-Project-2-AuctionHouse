import { createElement } from "../helpers/createElement.js";
export function displayItem({
  title,
  imageUrl,
  altText,
  auctionStart,
  auctionEnd,
  description,
  bids,
  id,
}) {
  const colDiv = createElement("div", "col-lg-4 col-md-6 col-12 pb-2 pt-5");

  const cardDiv = createElement("div", "card interactive", null, {
    "data-item": true,
    "data-item-id": id,
  });

  const image = createElement("img", "card-img-top", null, {
    src: imageUrl,
    alt: altText,
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
  cardDiv.appendChild(image);
  cardDiv.appendChild(cardBody);
  colDiv.appendChild(cardDiv);

  document.getElementById("bootstrapRow").appendChild(colDiv);
}

/*<div class="row">
<div class="col-lg-4 col-md-6 col-12 pb-2">
  <div class="card">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <p class="card-text">
        Some quick example text to build on the card title and make up
        the bulk of the card's content.
      </p>
    </div>
  </div>
</div>
</div>*/
