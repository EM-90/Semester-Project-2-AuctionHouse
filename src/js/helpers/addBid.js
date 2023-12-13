import { addBid } from "../api/crud/create.js";

export async function addBidListener() {
  const bidForm = document.getElementById("bidForm");
  if (!bidForm) return;

  bidForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const bidAmountInput = document.querySelector(".addBidInput");
    const bidAmountValue = bidAmountInput.value;

    const bidAmount = Number(bidAmountValue);

    if (!isNaN(bidAmount) && bidAmount > 0) {
      const itemId = document.querySelector(".card[data-item]")?.dataset.itemId;
      const newBid = { amount: bidAmount };

      try {
        const response = await addBid(itemId, newBid);
        console.log("Bid response:", response);
      } catch (error) {
        console.error("Error placing bid:", error);
      }
    } else {
      console.error("Invalid bid amount");
    }
  });
}
