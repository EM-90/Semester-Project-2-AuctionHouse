import { createElement } from "../helpers/createElement.js";
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
  mainContentContainer.innerHTML = "";

  const formContainer = createElement(
    "form",
    " col-4 m-3 add-item-form",
    null,
    {
      method: "post",
      id: "addItemForm",
    }
  );

  // Title Field
  const titleLabel = createElement("label", "form-label", "Title", {
    for: "title",
  });
  const titleInput = createElement("input", "form-control", null, {
    type: "text",
    name: "title",
    id: "title",
  });

  // Description Field
  const descriptionLabel = createElement("label", "form-label", "Description", {
    for: "description",
  });
  const descriptionInput = createElement("textarea", "form-control", null, {
    type: "text",
    name: "description",
    id: "description",
  });

  // Ends At Field
  const endsAtLabel = createElement("label", "form-label", "Ends At", {
    for: "endsAt",
  });
  const endsAtInput = createElement("input", "form-control", null, {
    type: "datetime-local",
    name: "endsAt",
    id: "endsAt",
  });

  // Tags Field
  const tagsLabel = createElement("label", "form-label", "Tags", {
    for: "tags",
  });
  const tagsInput = createElement("input", "form-control", null, {
    type: "text",
    name: "tags",
    id: "tags",
  });

  // Media Field
  const mediaLabel = createElement("label", "form-label", "Media URL", {
    for: "media",
  });
  const mediaInput = createElement("input", "form-control", null, {
    type: "text",
    name: "media",
    id: "media",
  });

  // Submit Button
  const submitButton = createElement(
    "button",
    "btn btn-primary mt-3",
    "Submit",
    { type: "submit" }
  );

  // Append all elements to the form container
  formContainer.append(
    titleLabel,
    titleInput,
    descriptionLabel,
    descriptionInput,
    endsAtLabel,
    endsAtInput,
    tagsLabel,
    tagsInput,
    mediaLabel,
    mediaInput,
    submitButton
  );

  mainContentContainer.appendChild(formContainer);
}
