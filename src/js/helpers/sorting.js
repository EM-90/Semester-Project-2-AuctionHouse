export function sortItemByHighestAmount(items) {
  return items.sort((a, b) => b.amount - a.amount);
}
