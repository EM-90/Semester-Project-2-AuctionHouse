export function performSearch() {
  const userInput = document.getElementById("searchField").value.toLowerCase();
  const allTextElements = document.querySelectorAll(".searchable");

  allTextElements.forEach((element) => {
    if (element.textContent.toLowerCase().includes(userInput)) {
      element.style.display = "";
    } else {
      element.style.display = "none";
    }
  });
}

function updateNoResultsMessage() {
  const visibleElements = document.querySelectorAll(
    '.searchable:not([style*="display: none"])'
  );
  const noResultsElement = document.getElementById("noResultsMessage");

  if (visibleElements.length === 0) {
    noResultsElement.style.display = "";
  } else {
    noResultsElement.style.display = "none";
  }
}
