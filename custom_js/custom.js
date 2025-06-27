// count effect
document.addEventListener("DOMContentLoaded", function () {
    const countEl = document.getElementById("customerCount");
    let count = 0;
    const target = 150;
    const duration = 1000;
    const increment = target / (duration / 5);

    const counter = setInterval(() => {
      count += increment;
      if (count >= target) {
        count = target;
        clearInterval(counter);
      }
      countEl.textContent = Math.floor(count);
    }, 20);
  });
