export function auctionItemPage() {
  function createElement(type, className, text) {
    const element = document.createElement(type);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  }

  const mainContainer = createElement("div", "row");
  const col1 = createElement("div", "col-md-6");
  const col2 = createElement("div", "col-md-6");
  const row2 = createElement("div", "row");
  const col3 = createElement("div", "col-12");

  col1.appendChild(createElement("h2", null, "Item Details"));
  col1.appendChild(createElement("div", "card-container"));

  col2.appendChild(createElement("h2", null, "Auction Details"));
  const listGroup = createElement("div", "list-group mt-3");
  col2.appendChild(listGroup);

  const listItems = [
    {
      text: "A simple success list group item",
      className:
        "list-group-item list-group-item-action list-group-item-success",
    },
    {
      text: "A simple default list group item",
      className: "list-group-item list-group-item-action",
    },
  ];

  listItems.forEach((item) => {
    const listItemDiv = createElement("div", "d-flex justify-content-between");

    const anchor = createElement("a", item.className, item.text);
    anchor.setAttribute("href", "#");
    listItemDiv.appendChild(anchor);

    listGroup.appendChild(listItemDiv);
  });

  col3.appendChild(createElement("h2", null, "Specifications"));

  mainContainer.appendChild(col1);
  mainContainer.appendChild(col2);
  row2.appendChild(col3);

  document.body.appendChild(mainContainer);
  document.body.appendChild(row2);
}
