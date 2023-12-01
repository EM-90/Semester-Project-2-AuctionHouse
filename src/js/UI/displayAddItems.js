/*<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>*/

// formcontainer for adding items

export function displayAuctionItem() {
  const mainContentContainer = document.querySelector("#mainContent");

  const formContainer = document.createElement("form");
  formContainer.className = "m-3 add-item-form";
  formContainer.method = "post";
  formContainer.id = "addItemForm";

  // Title Field
  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title");
  titleLabel.className = "form-label";
  titleLabel.textContent = "Title";

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.className = "form-control";
  titleInput.id = "title";

  // Description Field
  const descriptionLabel = document.createElement("label");
  descriptionLabel.setAttribute("for", "description");
  descriptionLabel.className = "form-label";
  descriptionLabel.textContent = "Description";

  const descriptionInput = document.createElement("input");
  descriptionInput.type = "text";
  descriptionInput.className = "form-control";
  descriptionInput.id = "description";

  formContainer.appendChild(titleLabel);
  formContainer.appendChild(titleInput);
  formContainer.appendChild(descriptionLabel);
  formContainer.appendChild(descriptionInput);

  // Ends At Field
  const endsAtLabel = document.createElement("label");
  endsAtLabel.setAttribute("for", "endsAt");
  endsAtLabel.className = "form-label";
  endsAtLabel.textContent = "Ends At";
  const endsAtInput = document.createElement("input");
  endsAtInput.type = "datetime-local";
  endsAtInput.className = "form-control";
  endsAtInput.id = "endsAt";
  formContainer.appendChild(endsAtLabel);
  formContainer.appendChild(endsAtInput);

  // Tags Field
  const tagsLabel = document.createElement("label");
  tagsLabel.setAttribute("for", "tags");
  tagsLabel.className = "form-label";
  tagsLabel.textContent = "Tags";
  const tagsInput = document.createElement("input");
  tagsInput.type = "text";
  tagsInput.className = "form-control";
  tagsInput.id = "tags";
  formContainer.appendChild(tagsLabel);
  formContainer.appendChild(tagsInput);

  // Media Field - Picture of the Auction item
  const mediaLabel = document.createElement("label");
  mediaLabel.setAttribute("for", "media");
  mediaLabel.className = "form-label";
  mediaLabel.textContent = "Media URL";
  const mediaInput = document.createElement("input");
  mediaInput.type = "text";
  mediaInput.className = "form-control";
  mediaInput.id = "media";
  formContainer.appendChild(mediaLabel);
  formContainer.appendChild(mediaInput);

  // Submit Button
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.className = "btn btn-primary";
  submitButton.textContent = "Submit";
  formContainer.appendChild(submitButton);

  mainContentContainer.appendChild(formContainer);
}
