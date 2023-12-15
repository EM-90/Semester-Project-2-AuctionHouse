import { displayMultipleItems } from "../../UI/displayMultipleItems.js";

//const cardContainer = document.getElementById("bootstrapRow");

export function searchBarFunction(auctionItems) {
  const searchField = document.getElementById("searchField");

  searchField.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredItems = auctionItems.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchString) ||
        item.tags.some((tag) => tag.toLowerCase().includes(searchString))
      );
    });
    displayMultipleItems(filteredItems);
  });
}
