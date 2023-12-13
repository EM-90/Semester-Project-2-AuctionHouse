export function countdown(endTime, countdownElement) {
  const end = new Date(endTime);
  const timer = setInterval(() => {
    const now = new Date();
    const difference = end - now;

    if (difference <= 0) {
      clearInterval(timer);
      countdownElement.innerHTML = "Auction ended";
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}
