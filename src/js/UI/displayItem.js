export function displayitem({
  title,
  imageUrl,
  altText,
  auctionStart,
  auctionEnd,
  description,
  bids,
  id,
}) {
  const colDiv = document.createElement("div");
  colDiv.className = "col-lg-4 col-md-6 col-12 pb-2 pt-5";

  const cardDiv = document.createElement("div");
  cardDiv.className = "card interactive";
  cardDiv.setAttribute("data-post", true);
  cardDiv.setAttribute("data-post-id", id);

  const image = document.createElement("img");
  image.src = imageUrl;
  image.className = "card-img-top";
  image.alt = altText;

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const titleEl = document.createElement("h3");
  titleEl.className = "title";
  titleEl.textContent = title;

  const cardParagraph = document.createElement("p");
  cardParagraph.className = "card-text";
  cardParagraph.textContent = description;

  const createDateEl = document.createElement("p");
  createDateEl.className = "created-at";
  createDateEl.textContent = `Auction start: ${auctionStart}`;

  const endDateEl = document.createElement("p");
  endDateEl.className = "ends-at";
  endDateEl.textContent = `Ends at: ${auctionEnd}`;

  const count = document.createElement("p");
  count.className = "bidding-count";
  count.textContent = `Bids: ${bids}`;

  cardDiv.appendChild(image);
  cardBody.appendChild(titleEl);
  cardDiv.appendChild(cardBody);
  colDiv.appendChild(cardDiv);
  cardBody.appendChild(createDateEl);
  cardBody.appendChild(endDateEl);
  cardBody.appendChild(count);
  cardBody.appendChild(cardParagraph);

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
