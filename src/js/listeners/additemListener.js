export function addItemListener() {
  document.body.addEventListener("click", function (event) {
    if (event.target && event.target.id === "addItemsId") {
      //here i display the form where the user creats new auction items
    }
  });
}
