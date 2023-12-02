export function displayListings(
  titleText,
  imageSrc,
  altText,
  startDate,
  endDate,
  cardText,
  bids
) {
  // Card column using Bootstrap classes
  const colDiv = document.createElement("div");
  colDiv.className = "col-lg-4 col-md-6 col-12 pb-2 pt-5";

  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  const image = document.createElement("img");
  image.src = imageSrc;
  image.className = "card-img-top";
  image.alt = altText;

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const title = document.createElement("h3");
  title.className = "title";
  title.textContent = titleText;

  const cardParagraph = document.createElement("p");
  cardParagraph.className = "card-text";
  cardParagraph.textContent = cardText;

  const createDateEl = document.createElement("p");
  createDateEl.className = "created-at";
  createDateEl.textContent = `Auction start: ${startDate}`;

  const endDateEl = document.createElement("p");
  endDateEl.className = "ends-at";
  endDateEl.textContent = `Ends at: ${endDate}`;

  const count = document.createElement("p");
  count.className = "bidding-count";
  count.textContent = `bids: ${bids}`;

  cardDiv.appendChild(image);
  cardBody.appendChild(title);
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
